/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function trim(str){ //删除左右两端的空格
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
function addAqiData() {
    var reg = /^[\u4e00-\u9fa5_a-zA-Z]/;
    var city = trim(document.getElementById("aqi-city-input").value);
    var value = parseInt(document.getElementById("aqi-value-input").value);
    if(reg.test(city)&&!isNaN(value)){
        aqiData[city] = value;
    }else{
        alert("输入不合法！");
    }
    //alert(reg.test(city.value));
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var aqiTable = document.getElementById("aqi-table");
    aqiTable.innerHTML = "<tr> <td>城市</td><td>空气质量</td><td>操作</td> </tr>";
    var tmp = "<tr id='${city}'> <td>${city}</td><td>${value}</td><td><button onclick=delBtnHandle('${city}')>删除</button></td> </tr>";
    for(var city in aqiData){
        var tmphtml = tmp.replace("${city}",city).replace("${city}",city).replace("${value}",aqiData[city]).replace("${city}",city);
        aqiTable.innerHTML+=tmphtml;
    }
    //alert(tmp.replace("${city}","北京"));
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
    // do sth.
    var node = document.getElementById(city);
    node.parentNode.removeChild(node);
    //renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    var addBtn = document.getElementById("add-btn");
    addBtn.onclick = addBtnHandle;

}
window.onload = function () {
    init();
}
