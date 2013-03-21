///import baidu.array;
/*
 * @fileOverview
 * @author meizz
 * @create 2012-07-30
 * @modify
 */

/**
 * @description 从后往前，查询数组中指定元素的索引位置
 *
 * @name baidu.array.lastIndexOf()
 * @function
 * @grammar $Aarray.lastIndexOf(match[, fromIndex])
 * @param   {Array}       source  要遍历的数组
 * @param   {Object}      match     匹配项
 * @param   {Number}      fromIndex 起始位置
 * @return  {Number}      被匹配项的下标
 */

baidu.array.lastIndexOf = baidu.array.lastIndexOf || function(match, fromIndex){
    baidu.check(".+(,number)?", "baidu.array.lastIndexOf");
    var len,source;
    
    baidu.isArray(match) ? 
        (source = match,match = fromIndex,fromIndex = arguments[2]) :
        (source = this);
        
    len = source.length;
    
    (!(fromIndex = fromIndex | 0) || fromIndex >= len) && (fromIndex = len - 1);
    fromIndex < 0 && (fromIndex += len);

    for(; fromIndex >= 0; fromIndex --){
        if(fromIndex in source && source[fromIndex] === match){
            return fromIndex;
        }
    }
    
    return -1;
};