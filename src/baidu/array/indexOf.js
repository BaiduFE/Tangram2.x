///import baidu.array;

/*
 * @fileOverview
 * @author meizz
 * @create 2012-07-30
 * @modify
 */

/**
 * @description 查询数组中指定元素的索引位置
 *
 * @name baidu.array.indexOf()
 * @function
 * @grammar $Aarray.indexOf(match[, fromIndex])
 * @param   {Array}       source  要遍历的数组
 * @param   {Object}      match     匹配项
 * @param   {Number}      fromIndex 起始位置
 * @return  {Number}      被匹配项的下标
 */

baidu.array.indexOf = baidu.array.indexOf || function(match, fromIndex){
    baidu.check(".+(,number)?","baidu.array.indexOf");
    var len,source;
    
    baidu.isArray(match) ? 
        (source = match,match = fromIndex,fromIndex = arguments[2]) :
        (source = this);

    len = source.length;

    // 小于 0
    (fromIndex = fromIndex | 0) < 0 && (fromIndex = Math.max(0, len + fromIndex));

    for ( ; fromIndex < len; fromIndex++) {
        if(fromIndex in source && source[fromIndex] === match) {
            return fromIndex;
        }
    }
    
    return -1;
};
