/*
 * Tangram
 * Copyright 2009 Baidu Inc. All rights reserved.
 */

///import pack.baidu.array;

/**
 * @description 清空一个数组
 * @name baidu.array.empty
 * @function
 * @grammar baidu.array.empty(source)
 * @param {Array} source 需要清空的数组.
 * @return {void} 无返回值
 * @author berg
 */
baidu.array.empty = function(source) {
    source.length = 0;
};
