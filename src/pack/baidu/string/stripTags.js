/*
 * tangram
 * copyright 2011 baidu inc. all rights reserved.
 *
 * path: baidu/string/stripTags.js
 * author: leeight
 * version: 1.1.0
 * date: 2011/04/30
 */

///import pack.baidu.string;

/**
 * @description 去掉字符串中的html标签
 * @name baidu.strng.striptags
 * @function
 * @grammar baidu.string.stripTags(source)
 * @param {string} source 要处理的字符串.
 * @return {String} 返回去掉HTML标签后的字符
 */
baidu.string.stripTags = function(source) {
    return String(source || '').replace(/<[^>]+>/g, '');
};
