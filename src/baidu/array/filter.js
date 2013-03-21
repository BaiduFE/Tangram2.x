///import baidu.array;
///import baidu.type;
/*
 * @fileOverview
 * @description 过滤数组
 * @author meizz
 * @create 2012-07-30
 * @modify
 */

/**
 * @description 过滤数组
 *
 * @name baidu.array.filter()
 * @function
 * @grammar array.filter(iterator[, context])
 * @param   {Array}         source  要遍历的数组
 * @param   {Function}      iterator 用于做过滤的函数
 * @param   {context}       context  方法作用域
 * @return  {Array}             已经过滤后的数组
 */


baidu.array.filter = baidu.array.filter || function(iterator, context){
    var result = [],
        i, n, item, index=0,source;
    
    baidu.isArray(iterator) ?
        (source = iterator,iterator = context,context = arguments[2]) : (source = this);
        
    if (baidu.type(iterator) === "function") {
        for (i=0, n=source.length; i<n; i++) {
            item = source[i];

            if (iterator.call(context || source, item, i, source) === true) {
                result[index ++] = item;
            }
        }
    }
    return result;
};