/*
 * Tangram
 * Copyright 2009 Baidu Inc. All rights reserved.
 */

///import pack.baidu.platform;

/**
 * @description 判断是否为iphone平台
 * @property iphone 是否为iphone平台
 * @name baidu.platform.isIphone
 * @type {boolean}
 * @meta standard
 * @see baidu.platform.x11,baidu.platform.windows,baidu.platform.macintosh,baidu.platform.ipad,baidu.platform.android
 * @return {Boolean} 布尔值
 * @author jz
 */
baidu.platform.isIphone = /iphone/i.test(navigator.userAgent);
