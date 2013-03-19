/*
 * Tangram
 * Copyright 2009 Baidu Inc. All rights reserved.
 */

///import pack.baidu.platform;

/**
 * @description 判断是否为windows平台
 * @property windows 是否为windows平台
 * @name baidu.platform.isWindows
 * @type {boolean}
 * @meta standard
 * @see baidu.platform.x11,baidu.platform.macintosh,baidu.platform.iphone,baidu.platform.ipad,baidu.platform.android
 * @return {Boolean} 布尔值 
 * @author jz
 */
baidu.platform.isWindows = /windows/i.test(navigator.userAgent);
