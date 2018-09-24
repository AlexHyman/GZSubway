var subwayData = {
    "1号线": ["广州东站", "体育中心", "体育西路", "杨箕", "东山口", "烈士陵园", "农讲所", "公园前", "西门口", "陈家祠", "长寿路", "黄沙", "芳村", "花地湾", "坑口", "西朗"],
    "2号线": ["嘉禾望岗", "黄边", "江夏", "萧岗", "白云文化广场", "白云公园", "飞翔公园", "三元里", "广州火车站", "越秀公园", "纪念堂", "公园前", "海珠广场", "市二宫", "江南西", "昌岗", "江泰路", "东晓南", "南洲", "洛溪", "南浦", "会江", "石壁", "广州南站"],
    "3号线": ["天河客运站", "五山", "华师", "岗顶", "石牌桥", "体育西路", "珠江新城", "广州塔", "客村", "大塘", "沥滘", "厦滘", "大石", "汉溪长隆", "市桥", "番禺广场"],
    "4号线": ["黄村", "车陂", "车陂南", "万胜围", "官洲", "大学城北", "大学城南", "新造", "石碁", "海傍", "低涌", "东涌", "庆盛", "黄阁汽车城", "黄阁", "蕉门", "金洲"],
    "5号线": ["滘口", "坦尾", "中山八", "西场", "西村", "火车站", "小北", "淘金", "区庄", "动物园", "杨箕", "五羊邨", "珠江新城", "猎德", "潭村", "员村", "科韵路", "车陂南", "东圃", "三溪", "鱼珠", "大沙地", "大沙东", "文冲"],
    "6号线": ["浔峰岗", "横沙", "沙贝", "河沙", "坦尾", "如意坊", "黄沙", "文化公园", "一德路", "海珠广场", "北京路", "团一大广场", "东湖", "东山口", "区庄", "黄花岗", "沙河顶", "沙河", "天平架", "燕塘", "天河客运站", "长湴"],
    // "7号线" : ["广州南站","石壁站","谢村站","钟村站","汉溪长隆站","南村万博站","员岗站","板桥站","大学城南站"],
    "8号线": ["凤凰新村", "沙园", "宝岗大道", "昌岗", "晓港", "中大", "鹭江", "客村", "赤岗", "磨碟沙", "新港东", "琶洲", "万胜围"],
    // "9号线" : ["飞鹅岭站","花都汽车城站","广州北站","花城路站","花果山公园站","花都广场站","马鞍山公园站","莲塘站","清㘵站","清塘站","高增站"],
    // "14号线" : ["新和","红卫","新南","枫下","知识城","何棠下","旺村","汤村","镇龙北","镇龙"],
    "APM线": ["林和西", "体育中心南", "天河南", "黄埔大道", "妇儿中心", "花城大道", "大剧院", "海心沙", "广州塔"],
    "广佛线": ["魁奇路", "季华园", "同济路", "祖庙", "普君北路", "朝安", "桂城", "南桂路", "礌岗", "千灯湖", "金融高新区", "龙溪", "菊树", "西朗"]
}

var edgesData = [
    // 1号线
    ["广州东站", "体育中心", 1.92],
    ["体育中心", "体育西路", 1.05],
    ["体育西路", "杨箕", 1.29],
    ["杨箕", "东山口", 1.44],
    ["东山口", "烈士陵园", 1.09],
    ["烈士陵园", "农讲所", 0.94],
    ["农讲所", "公园前", 1.21],
    ["公园前", "西门口", 0.86],
    ["西门口", "陈家祠", 0.93],
    ["陈家祠", "长寿路", 1.13],
    ["长寿路", "黄沙", 0.94],
    ["黄沙", "芳村", 1.35],
    ["芳村", "花地湾", 1.33],
    ["花地湾", "坑口", 0.92],
    ["坑口", "西朗", 1.55],
    // 2号线
    ["嘉禾望岗", "黄边", 1.91],
    ["黄边", "江夏", 1.23],
    ["江夏", "萧岗", 1.51],
    ["萧岗", "白云文化广场", 1.12],
    ["白云文化广场", "白云公园", 1.02],
    ["白云公园", "飞翔公园", 1.61],
    ["飞翔公园", "三元里", 1.25],
    ["三元里", "广州火车站", 1.41],
    ["广州火车站", "越秀公园", 0.95],
    ["越秀公园", "纪念堂", 0.91],
    ["纪念堂", "公园前", 0.79],
    ["公园前", "海珠广场", 1.30],
    ["海珠广场", "市二宫", 1.04],
    ["市二宫“", "江南西", 1.08],
    ["江南西", "昌岗", 0.76],
    ["昌岗", "江泰路", 1.01],
    ["江泰路", "东晓南", 1.92],
    ["东晓南", "南洲", 0.91],
    ["南洲", "洛溪", 2.40],
    ["洛溪", "南浦", 1.10],
    ["南浦", "会江", 2.50],
    ["会江", "石壁", 2.40],
    ["石壁", "广州南站", 1.26],
    // 3号线
    ["天河客运站", "五山", 2.19],
    ["五山", "华师", 1.61],
    ["华师", "岗顶", 0.85],
    ["岗顶", "石牌桥", 0.90],
    ["石牌桥", "体育西路", 1.31],
    ["体育西路", "珠江新城", 1.29],
    ["珠江新城", "广州塔", 1.54],
    ["广州塔", "客村", 1.15],
    ["客村", "大塘", 2.04],
    ["大塘", "沥滘", 2.54],
    ["沥滘", "厦滘", 1.90],
    ["厦滘", "大石", 2.22],
    ["大石", "汉溪长隆", 3.13],
    ["汉溪长隆", "市桥", 6.07],
    ["市桥", "番禺广场", 3.90],
    // 4号线
    ["黄村", "车陂", 1.92],
    ["车陂", "车陂南", 1.29],
    ["车陂南", "万胜围", 2.10],
    ["万胜围", "官洲", 3.76],
    ["官洲", "大学城北", 1.32],
    ["大学城北", "大学城南", 2.23],
    ["大学城南", "新造", 2.29],
    ["新造", "石碁", 9.40],
    ["石碁", "海傍", 2.23],
    ["海傍", "低涌", 2.47],
    ["低涌", "东涌", 3.93],
    ["东涌", "庆盛", 2.69],
    ["庆盛", "黄阁汽车城", 3.75],
    ["黄阁汽车城", "黄阁", 1.53],
    ["黄阁", "蕉门", 3.01],
    ["蕉门", "金洲", 1.94],
    // 5号线
    ["滘口", "坦尾", 1.65],
    ["坦尾", "中山八", 1.50],
    ["中山八", "西场", 1.38],
    ["西场", "西村", 0.65],
    ["西村", "火车站", 1.71],
    ["火车站", "小北", 2.25],
    ["小北", "淘金", 1.10],
    ["淘金", "区庄", 1.05],
    ["区庄", "动物园", 1.09],
    ["动物园", "杨箕", 0.95],
    ["杨箕", "五羊邨", 1.16],
    ["五羊邨", "珠江新城", 0.69],
    ["珠江新城", "猎德", 1.14],
    ["猎德", "潭村", 1.38],
    ["潭村", "员村", 1.85],
    ["员村", "科韵路", 1.48],
    ["科韵路", "车陂南", 1.30],
    ["车陂南", "东圃", 1.46],
    ["东圃", "三溪", 1.56],
    ["三溪", "鱼珠", 1.78],
    ["鱼珠", "大沙地", 1.58],
    ["大沙地", "大沙东", 1.30],
    ["大沙东", "文冲", 1.11],
    // 6号线
    ["浔峰岗", "横沙", 0.87],
    ["横沙", "沙贝", 0.79],
    ["沙贝", "河沙", 2.15],
    ["河沙", "坦尾", 1.15],
    ["坦尾", "如意坊", 1.78],
    ["如意坊", "黄沙", 1.13],
    ["黄沙", "文化公园", 0.90],
    ["文化公园", "一德路", 0.94],
    ["一德路", "海珠广场", 0.88],
    ["海珠广场", "北京路", 0.70],
    ["北京路", "团一大广场", 0.82],
    ["团一大广场", "东湖", 1.13],
    ["东湖", "东山口", 1.45],
    ["东山口", "区庄", 1.25],
    ["区庄", "黄花岗", 0.91],
    ["黄花岗", "沙河顶", 1.05],
    ["沙河顶", "沙河", 0.89],
    ["沙河", "天平架", 1.32],
    ["天平架", "燕塘", 0, 60],
    ["燕塘", "天河客运站", 2.21],
    ["天河客运站", "长湴", 1.06],
    // 7号线
    // 8号线
    ["凤凰新村", "沙园", 0.81],
    ["沙园", "宝岗大道", 1.08],
    ["宝岗大道", "昌岗", 0.95],
    ["昌岗", "晓港", 0.57],
    ["晓港", "中大", 1.20],
    ["中大", "鹭江", 1.76],
    ["鹭江", "客村", 1.22],
    ["客村", "赤岗", 1.51],
    ["赤岗", "磨碟沙", 0.80],
    ["磨碟沙", "新港东", 1.58],
    ["新港东", "琶洲", 0.99],
    ["琶洲", "万胜围 ", 1.85],
    // 9号线
    // 14号线
    // APM线
    ["林和西", "体育中心南", 0.82],
    ["体育中心南", "天河南", 0.35],
    ["天河南", "黄埔大道", 0.47],
    ["黄埔大道", "妇儿中心", 0.47],
    ["妇儿中心", "花城大道", 0.39],
    ["花城大道", "大剧院", 0.41],
    ["大剧院", "海心沙", 0.43],
    ["海心沙", "广州塔", 0.63],
    // 广佛线
    ["魁奇路", "季华园", 1.44],
    ["季华园", "同济路", 1.35],
    ["同济路", "祖庙", 1.12],
    ["祖庙", "普君北路", 1.09],
    ["普君北路", "朝安", 1.13],
    ["朝安", "桂城", 1.02],
    ["桂城", "南桂路", 1.33],
    ["南桂路", "礌岗", 1.04],
    ["礌岗", "千灯湖", 1.34],
    ["千灯湖", "金融高新区", 1.37],
    ["金融高新区", "龙溪", 3.72],
    ["龙溪", "菊树", 2.07],
    ["菊树", "西朗", 1.98]
]

// 使用noConflict()方法为jQuery变量规定新的名称
var $j = jQuery.noConflict();

function init() {
    initSubwayBox();
    initSubwayClick()
    initCalcFare();
    initDijkstra();
}

//获取当前线路
function genSubwayLineHtml() {
    var htmls = [],
        i = -1,
        classname = ["op-subway-one", "op-subway-two", "op-subway-three", "op-subway-four", "op-subway-five", "op-subway-six", "op-subway-eight", "op-subway-apm", "op-subway-gfx"];
    // 遍历所有线    
    for (var lineName in subwayData)
        i++,
        htmls.push("<li><span class=" + classname[i] + "></span>" + lineName + "</li>");
    return htmls.join("")
}

// 获取当前站点
function genSubwayStationHtml(lineName) {
    for (var stations = subwayData[lineName], htmls = [], i = 0; i < stations.length; ++i) htmls.push("<li>" + stations[i] + "</li>");
    return htmls.join("")
}

function tryActiveButton() {
    var start = $j(".op-subway-box-start .op-subway-station em").text();
    end = $j(".op-subway-box-end .op-subway-station em").text();
    if ("选择这站" != start && "选择车站" != end) $j(".op-subway-calc-false").addClass("op-subway-calc-fare").removeClass("op-subway-calc-false")
}

// 初始化下拉菜单
function initSubwayBox() {
    var lineHtml = genSubwayLineHtml();
    $j(".op-subway-line .op-subway-ul").html(lineHtml),
        $j(".op-subway-line .op-subway-ul").on("click", "li",
            function () {
                // 更改文本内容
                var lineName = $j(this).text();
                $j(this).parent().parent().parent().find(".op-subway-line em").css({
                        padding: "0px 5px 0px 20px"
                    }),
                    $j(this).parent().parent().parent().find(".op-subway-station").css({
                        background: "#fff"
                    }),
                    $j(this).parent().parent().parent().find(".op-subway-station em").css({
                        color: "#333"
                    });
                var stationHtml = genSubwayStationHtml(lineName),
                    $box = $j(this).parent().parent().parent();
                $box.find(".op-subway-ulk").html(stationHtml);
                var firstStation = subwayData[lineName][0];
                $box.find(".op-subway-station em").text(firstStation),
                    tryActiveButton()
            })
}

// 点击处理
function initSubwayClick() {
    $j(".op-subway-line,.op-subway-station").on("click",
        function (event) {
            // 阻止冒泡
            if (event.stopPropagation(), $j(".op-subway-ts").hide, $j(".op-subway-box ul").hide(), $j(this).find("ul").children().length) $j(this).find("ul").show();
            // 点击空白处，自动隐藏
            $j(document).on("click",
                function () {
                    $j(".op-subway-box ul").hide()
                })
        })
    $j(".op-subway-ul, .op-subway-ulk").on("click", "li",
        function (event) {
            event.stopPropagation(),
                $j(this).parent().parent().find("em").html($j(this).html()),
                // 隐藏下拉框
                $j(this).parent().parent().find("ul").hide();

        })
}

function initCalcFare() {
    $j(".op-subway-main").on("click", ".op-subway-calc-fare",
        function () {
            var start = $j(".op-subway-box-start .op-subway-station em").html();
            end = $j(".op-subway-box-end .op-subway-station em").html();
            if (start == end)
                return $j(".op-subway-ts").html("走路吧").show();
            false;
            $j(".op-subway-tab,.op-subway-footer").show(),
                $j($j(".op-subway-tab li")).show();
            var distance = Dijkstra.shortestPath(start, end),
                fare = caleFare(distance);
            $j(".op-subway-content2 .op-subway-text .op-subway-fareinfo").html(getText(distance, fare));

        })
}

// 计价方式
function caleFare(distance) {
    if (distance <= 4) return 2;
    else if (distance <= 12) return 2 + Math.ceil((distance - 4) / 4);
    else if (distance <= 24) return 4 + Math.ceil((distance - 12) / 6);
    else return 7 + Math.ceil((distance - 32) / 8)
}

function format(distance) {
    console.log();
    var s = distance + "",
        index = s.indexOf(".");
    if (index >= 0)
        if (s.length > index + 2) s = s.substr(0, index + 2);
    return s;
}

// 获取文本信息
function getText(distance, fare) {
    var increase = caleMonthFare(fare);
    if (distance = format(distance))
        return '<p class="op-subway-span">单程<em class="op-subway-increase">' + distance + '</em>公里，票价<em class="op-subway-increase ">' + fare + '</em>元';
}

// 计算多花费用
function caleMonthFare(fare) {
    var addtext = 2 * (fare - 2) * 22 * 12;
    return addtext;
}

function initDijkstra() {
    Dijkstra.addEdges(edgesData);
}

init();