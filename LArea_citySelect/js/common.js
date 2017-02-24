/**
 * LArea citySelect 省市区联动移动端控件
 *
 * v2.0.0
 *
 * author:但汉奇
 *
 * https://github.com/godkillerdan/LArea-citySelect
 *
 * Copyright 2017
 * 最近修改于： 2017-2-24 14:50:35
 *
 *
 */
window.onload=function(){
    rootsize(); 
};
//当浏览器窗口大小改变时，设置根字号  
window.onresize=function(){  
     rootsize();  
};  
//cal兼容Google浏览器的写法
function rootsize(){
    var deviceWidth = document.documentElement.clientWidth;//获取页面可见宽度
    if(deviceWidth > 750) deviceWidth = 750;
    document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
}
