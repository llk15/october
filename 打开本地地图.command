#!/bin/bash

cd -- "$(dirname -- "$0")" || exit 1
exec python3 "本地预览.py"
