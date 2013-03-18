/*
 * Tangram
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu/page/getMousePosition.js
 * author: meizz
 * version: 1.1.0
 * date: 2010/06/02
 */

///import pack.baidu.event.on;
///import pack.baidu.page.getScrollTop;
///import pack.baidu.page.getScrollLeft;

/**
 * @description 获得页面里的目前鼠标所在的坐标
 * @name baidu.page.getMousePosition
 * @function
 * @grammar baidu.page.getMousePosition()
 * @version 1.2
 *             
 * @return {object} 鼠标坐标值{x:[Number], y:[Number]}
 */

(function(){

 baidu.page.getMousePosition = function(){
 return {
x : baidu.page.getScrollLeft() + xy.x,
y : baidu.page.getScrollTop() + xy.y
};
};

var xy = {x:0, y:0};
// 监听当前网页的 mousemove 事件以获得鼠标的实时坐标
baidu.event.on(document, "onmousemove", function(e){
    e = window.event || e;
    xy.x = e.clientX;
    xy.y = e.clientY;
    });

})();
