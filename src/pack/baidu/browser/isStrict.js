/*
 * Tangram
 * Copyright 2009 Baidu Inc. All rights reserved.
 * 
 * path: baidu/browser/isStrict.js
 * author: allstar
 * version: 1.1.0
 * date: 2009/11/23
 */

///import pack.baidu.browser;

/**
 * @description 判断是否严格标准的渲染模式
 * @property
 * @type {boolean}
 * @name baidu.browser.isStrict
 * @meta standard
 * @return {Boolean} 布尔值
 */
baidu.browser.isStrict = document.compatMode == "CSS1Compat";
