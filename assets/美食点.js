// 以「吃/ref/美食地点编号.md」为唯一核验来源，仅收录已核准到唯一门店、地址和坐标的攻略编号。
// 未列出的编号仍计入所属主点 count，但不生成附属标记。
window.FOOD_POINTS = {
  "DN-04": { name: "吴记富苑（朝阳街总店）", lat: 23.365325, lng: 116.728925, address: "汕头市龙湖区金砂路朝阳庄北区12栋（商检局旁）", mapUrl: "https://www.amap.com/place/B02F2019LK" },
  "DN-06": { name: "小吴肠粉", lat: 23.362749, lng: 116.710484, address: "汕头市金平区龙眼市场椰园4幢一带", mapUrl: "https://www.amap.com/place/B0FFFKRRZC" },
  "DN-08": { name: "丹霞老杨肠粉（丹霞庄店）", lat: 23.3651675, lng: 116.723459, address: "汕头市龙湖区丹霞庄北区10栋104室", mapUrl: "https://uri.amap.com/marker?position=116.723459,23.3651675&name=%E4%B8%B9%E9%9C%9E%E8%80%81%E6%9D%A8%E8%82%A0%E7%B2%89&coordinate=gaode&callnative=0", sourceUrl: "https://www.trip.com/restaurant/china/shantou/detail/restaurant-15937041/", sourceLabel: "Trip.com" },
  "DN-09": { name: "卢记牛肉店（新翠苑店）", lat: 23.561532, lng: 116.380404, address: "揭阳市榕城区新翠苑一带", mapUrl: "https://www.amap.com/place/B0FFHBX7RJ" },
  "YQ-02": { name: "品福记三角粿", lat: 23.369828, lng: 116.721943, address: "汕头市龙湖区华山路29号环碧庄金珠园7幢103号", mapUrl: "https://www.amap.com/place/B0J6MOUHJZ" },
  "YQ-05": { name: "老胡甜汤", lat: 23.361212, lng: 116.710317, address: "汕头市金平区梅园3栋一带", mapUrl: "https://www.amap.com/place/B0FFHIJCC3" },
  "HTJ-10": { name: "金新肠粉", lat: 23.5342877, lng: 116.3734975, address: "揭阳市榕城区飞燕四巷（进贤门大道运通小学北侧约30米）", mapUrl: "https://uri.amap.com/marker?position=116.3734975,23.5342877&name=%E9%87%91%E6%96%B0%E8%82%A0%E7%B2%89&coordinate=gaode&callnative=0", sourceUrl: "https://hk.trip.com/restaurant/china/jieyang/detail/restaurant-127697668/", sourceLabel: "Trip.com" },
  "HTJ-21": { name: "回味咸菜鸡翅", lat: 23.536075, lng: 116.355513, address: "揭阳市榕城区揭阳学宫西门西南约140米", mapUrl: "https://www.amap.com/place/B0KKR501R5" },
  "HTJ-27": { name: "卢记牛肉店（新翠苑店）", lat: 23.561532, lng: 116.380404, address: "揭阳市榕城区新翠苑一带", mapUrl: "https://www.amap.com/place/B0FFHBX7RJ" },
  "HTJ-34": { name: "上义麦粿", lat: 23.5305205, lng: 116.3697237, address: "揭阳市榕城区义和南六巷1号", mapUrl: "https://uri.amap.com/marker?position=116.3697237,23.5305205&name=%E4%B8%8A%E4%B9%89%E9%BA%A6%E7%B2%BF&coordinate=gaode&callnative=0", sourceUrl: "https://www.trip.com/restaurant/china/jieyang/detail/restaurant-32640490/", sourceLabel: "Trip.com" },
  "HTJ-41": { name: "贤记双皮奶（同德摩托街店）", lat: 23.527225, lng: 116.368907, address: "揭阳市榕城区同德路摩托街一带", mapUrl: "https://www.amap.com/place/B029700RSZ" },
  "HTS-06": { name: "亚岳朥粕粥（鸥汀店）", lat: 23.4106174, lng: 116.7145989, address: "汕头市龙湖区龟桥南路118号", mapUrl: "https://uri.amap.com/marker?position=116.7145989,23.4106174&name=%E4%BA%9A%E5%B2%B3%E6%9C%A5%E7%B2%95%E7%B2%A5&coordinate=gaode&callnative=0", sourceUrl: "https://gs.ctrip.com/html5/you/foods/fooddetail/215/17680810.html", sourceLabel: "携程" },
  "HTS-08": { name: "李记老牌豆腐花（金竹园店）", lat: 23.411505, lng: 116.7162317, address: "汕头市龙湖区金竹园路金竹园205栋", mapUrl: "https://uri.amap.com/marker?position=116.7162317,23.411505&name=%E6%9D%8E%E8%AE%B0%E8%80%81%E7%89%8C%E8%B1%86%E8%85%90%E8%8A%B1&coordinate=gaode&callnative=0", sourceUrl: "https://gs.ctrip.com/html5/you/foods/fooddetail/215/5522593.html", sourceLabel: "携程" },
  "HTS-14": { name: "老四猪血汤", lat: 23.363804, lng: 116.713554, address: "汕头市金平区三中／外马路一带", mapUrl: "https://www.amap.com/place/B0FFJZKBZD" },
  "HTS-16": { name: "金韩肠粉", lat: 23.370557, lng: 116.691999, address: "汕头市金平区金韩路一带", mapUrl: "https://www.amap.com/place/B0FFK2M75P" },
  "HTS-18": { name: "华坞傻脑蚝烙店", lat: 23.363099, lng: 116.692726, address: "汕头市金平区华坞路一带", mapUrl: "https://www.amap.com/place/B02F20PIDE" },
  "HTS-20": { name: "韩上楼（嵩山店）", lat: 23.398721, lng: 116.722973, address: "汕头市龙湖区嵩山北路18号嘉颜大厦", mapUrl: "https://ditu.amap.com/place/B0J6VUCVCE" },
  "HTS-21": { name: "建业家味·非遗潮汕菜", lat: 23.395374, lng: 116.720641, address: "汕头市龙湖区乐山路9号成德发广场1楼109号", mapUrl: "https://www.amap.com/place/B0HDP1LXZC" },
  "HTS-22": { name: "吴记富苑（朝阳街总店）", lat: 23.365325, lng: 116.728925, address: "汕头市龙湖区金砂路朝阳庄北区12栋（商检局旁）", mapUrl: "https://www.amap.com/place/B02F2019LK" },
  "HTS-23": { name: "纪德来甜汤", lat: 23.3858263, lng: 116.7130862, address: "汕头市金平区华山北路金墩园21栋110门面", mapUrl: "https://uri.amap.com/marker?position=116.7130862,23.3858263&name=%E7%BA%AA%E5%BE%B7%E6%9D%A5%E7%94%9C%E6%B1%A4&coordinate=gaode&callnative=0", sourceUrl: "https://tw.trip.com/restaurant/china/shantou/detail/jidelai-tiantang-148438999/", sourceLabel: "Trip.com" },
  "HTS-28": { name: "潮陈记土鸡火锅（珠江路店）", lat: 23.376538, lng: 116.733518, address: "汕头市龙湖区珠江路一带", mapUrl: "https://ditu.amap.com/place/B02F201864" },
  "HTS-32": { name: "非遗达濠李老二鱼丸（海旁路店）", lat: 23.276406, lng: 116.7260785, address: "汕头市濠江区海旁路22号（粤明隔壁）", mapUrl: "https://uri.amap.com/marker?position=116.7260785,23.276406&name=%E8%BE%BE%E6%BF%A0%E6%9D%8E%E8%80%81%E4%BA%8C%E9%B1%BC%E4%B8%B8&coordinate=gaode&callnative=0", sourceUrl: "https://hk.trip.com/restaurant/china/shantou/detail/restaurant-11671129/", sourceLabel: "Trip.com" },
  "HTS-33": { name: "晶华鱼丸（海旁路店）", lat: 23.2777515, lng: 116.7250618, address: "汕头市濠江区海旁路32号", mapUrl: "https://uri.amap.com/marker?position=116.7250618,23.2777515&name=%E6%99%B6%E5%8D%8E%E9%B1%BC%E4%B8%B8&coordinate=gaode&callnative=0", sourceUrl: "https://you.ctrip.com/food/shantou215/7847047.html", sourceLabel: "携程" },
  "HTS-41": { name: "仁和潮饼面包店", lat: 23.3512727, lng: 116.6674753, address: "汕头市金平区西堤路54号", mapUrl: "https://uri.amap.com/marker?position=116.6674753,23.3512727&name=%E4%BB%81%E5%92%8C%E6%BD%AE%E9%A5%BC%E9%9D%A2%E5%8C%85%E5%BA%97&coordinate=gaode&callnative=0", sourceUrl: "https://hk.trip.com/restaurant/china/shantou/detail/restaurant-20543621/", sourceLabel: "Trip.com" },
  "HTS-43": { name: "共和老洪豆花草粿水粿", lat: 23.356711, lng: 116.689288, address: "汕头市金平区联兴里左巷与共和路交叉口南约40米", mapUrl: "https://www.amap.com/place/B0FFHVQISW" }
};

// 只给已经能落到唯一坐标的附属点展示时间；完整时间表见「吃/ref/美食地点编号.md」。
// “约”表示按画面切换核对的窗口，边界可能相差数秒。
window.FOOD_VIDEOS = {
  "DN-04": { time: "06:40–08:46", url: "https://www.bilibili.com/video/BV1ef421q7nw/?t=400" },
  "DN-06": { time: "09:50–09:59（到店未吃）", url: "https://www.bilibili.com/video/BV1ef421q7nw/?t=590" },
  "DN-08": { time: "10:55–12:29", url: "https://www.bilibili.com/video/BV1ef421q7nw/?t=655" },
  "DN-09": { time: "12:30–约14:35", url: "https://www.bilibili.com/video/BV1ef421q7nw/?t=750" },
  "YQ-02": { time: "05:09–06:43", url: "https://www.bilibili.com/video/BV18RJp6YEW4/?t=309" },
  "YQ-05": { time: "10:19–10:55", url: "https://www.bilibili.com/video/BV18RJp6YEW4/?t=619" },
  "HTS-18": { time: "约05:45–06:15", url: "https://www.bilibili.com/video/BV1sXZbYVETR/?t=345" },
  "HTS-20": { time: "约06:20–09:10", url: "https://www.bilibili.com/video/BV1sXZbYVETR/?t=380" },
  "HTS-32": { time: "约12:20–12:55", url: "https://www.bilibili.com/video/BV1sXZbYVETR/?t=740" }
};
