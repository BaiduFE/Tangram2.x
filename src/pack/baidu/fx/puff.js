/*
 * Tangram
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * @author: meizz
 * @namespace: baidu.fx.puff
 * @create: 2010-07-14
 * @version: 2010-07-14
 */

///import pack.baidu.fx.zoomOut;
///import pack.baidu.object.extend;
/**
 * @description 将DOM元素放大，关逐渐透明消失。
 * @function
 * @name baidu.fx.puff
 * @grammar baidu.fx.puff(element, options)
 * @param       {string|HTMLElement}      element               元素或者元素的ID
 * @param       {Object}                  options               选项。参数的详细说明如下表所示
 * @config      {Number}                  duration              800,//效果持续时间，默认值为800ms。
 * @config      {Number}                  to                    1.8,//放大倍数，默认1.8。
 * @config      {Function}                transition            function(schedule){return schedule;},时间线函数
 * @config      {Function}                onbeforestart         function(){},//效果开始前执行的回调函数
 * @config      {Function}                onbeforeupdate        function(){},//每次刷新画面之前会调用的回调函数
 * @config      {Function}                onafterupdate         function(){},//每次刷新画面之后会调用的回调函数
 * @config      {Function}                onafterfinish         function(){},//效果结束后会执行的回调函数
 * @config      {Function}                oncancel              function(){},//效果被撤销时的回调函数
 * @remark
 * 1.0.0开始支持
 * @see baidu.fx.puff
 * @return    {Instance}              baidu.fx.Timeline时间线类的一个实例
 */
baidu.fx.puff = function(element, options) {
    return baidu.fx.zoomOut(element,
        baidu.object.extend({
            to:1.8
            ,duration:800
            ,transformOrigin:"50% 50%"
        }, options||{})
    );
};
