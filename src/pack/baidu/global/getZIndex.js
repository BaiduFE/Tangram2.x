/*
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 * author: meizz
 * version: 2.0
 * date: 2011.12.22
 */

///import pack.baidu.global;
///import pack.baidu.global.get;
///import pack.baidu.global.set;

/**
 * @description baidu.global.getZIndex 全局统一管理 z-index。
 * @function
 * @grammar baidu.global.getZIndex(key,step)
 * @name baidu.global.getZIndex
 * @param   {String}    key 	信息对应的 key 值(popup | dialog)
 * @param   {Number}    step 	z-index 增长的步长
 * @return  {Number}            z-index
 */
baidu.global.getZIndex = function(key, step) {
	var zi = baidu.global.get("zIndex");
	if (key) {
		zi[key] = zi[key] + (step || 1);
	}
	return zi[key];
};
baidu.global.set("zIndex", {popup : 50000, dialog : 1000}, true);