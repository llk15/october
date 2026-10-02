#!/usr/bin/env python3
"""用支持 HTTP Range 的本地服务器预览潮汕地图。"""

from __future__ import annotations

import http.server
import os
import re
import shutil
import socket
import sys
import threading
import time
import webbrowser
from pathlib import Path


ROOT = Path(__file__).resolve().parent


class RangeRequestHandler(http.server.SimpleHTTPRequestHandler):
    range_to_send: tuple[int, int] | None = None

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def end_headers(self) -> None:
        self.send_header("Accept-Ranges", "bytes")
        super().end_headers()

    def send_head(self):
        range_header = self.headers.get("Range")
        if not range_header:
            self.range_to_send = None
            return super().send_head()

        path = self.translate_path(self.path)
        if os.path.isdir(path):
            self.range_to_send = None
            return super().send_head()

        try:
            source = open(path, "rb")
        except OSError:
            self.send_error(404, "File not found")
            return None

        try:
            file_size = os.fstat(source.fileno()).st_size
            match = re.fullmatch(r"bytes=(\d*)-(\d*)", range_header.strip())
            if not match:
                raise ValueError

            start_text, end_text = match.groups()
            if start_text:
                start = int(start_text)
                end = int(end_text) if end_text else file_size - 1
            elif end_text:
                suffix_size = int(end_text)
                start = max(0, file_size - suffix_size)
                end = file_size - 1
            else:
                raise ValueError

            if start >= file_size or start < 0:
                self.send_response(416)
                self.send_header("Content-Range", f"bytes */{file_size}")
                self.end_headers()
                source.close()
                return None

            end = min(end, file_size - 1)
            if end < start:
                raise ValueError
        except ValueError:
            source.close()
            self.send_error(400, "Invalid Range header")
            return None

        self.range_to_send = (start, end)
        self.send_response(206)
        self.send_header("Content-Type", self.guess_type(path))
        self.send_header("Content-Range", f"bytes {start}-{end}/{file_size}")
        self.send_header("Content-Length", str(end - start + 1))
        self.send_header("Last-Modified", self.date_time_string(os.fstat(source.fileno()).st_mtime))
        self.end_headers()
        return source

    def copyfile(self, source, outputfile) -> None:
        if self.range_to_send is None:
            shutil.copyfileobj(source, outputfile)
            return

        start, end = self.range_to_send
        source.seek(start)
        remaining = end - start + 1
        while remaining:
            chunk = source.read(min(64 * 1024, remaining))
            if not chunk:
                break
            outputfile.write(chunk)
            remaining -= len(chunk)


def available_port() -> int:
    with socket.socket() as probe:
        probe.bind(("127.0.0.1", 0))
        return probe.getsockname()[1]


def main() -> None:
    port = available_port()
    address = f"http://127.0.0.1:{port}/?localTiles=1"
    server = http.server.ThreadingHTTPServer(("127.0.0.1", port), RangeRequestHandler)

    print("潮汕地图本地服务已启动：")
    print(address)
    print("浏览器关闭后，可回到此窗口按 Control+C 停止服务。")

    threading.Thread(target=lambda: (time.sleep(0.4), webbrowser.open(address)), daemon=True).start()
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n本地服务已停止。")
    finally:
        server.server_close()


if __name__ == "__main__":
    try:
        main()
    except OSError as error:
        print(f"无法启动本地地图：{error}", file=sys.stderr)
        sys.exit(1)
