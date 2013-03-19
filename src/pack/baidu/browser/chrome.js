/*
 * Tangram
 * Copyright 2009 Baidu Inc. All rights reserved.
 */

///import pack.baidu.browser;

/**
 * @description 判断是否为chrome浏览器
 * @see baidu.browser.ie,baidu.browser.firefox,baidu.browser.safari,baidu.browser.opera   
 * @property 
 * @name baidu.browser.chrome
 * @type {string}
 * @return {Number} chrome版本号
 */
baidu.browser.chrome = /chrome\/(\d+\.\d+)/i.test(navigator.userAgent) ? + RegExp['\x241'] : undefined;
