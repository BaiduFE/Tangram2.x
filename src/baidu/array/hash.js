///import baidu.array;


/*
 * @fileoverview
 * @author meizz
 * @description 将两个数组参数合并成一个类似hashMap结构的对象，这个对象使用第一个数组做为key，使用第二个数组做为值，如果第二个参数未指定，则把对象的所有值置为true。
 * @create 2012-07-30
 * @modify
 */

/**
 * @description 将两个数组参数合并成一个类似hashMap结构的对象，这个对象使用第一个数组做为key，使用第二个数组做为值，如果第二个参数未指定，则把对象的所有值置为true
 *
 * @name baidu.array.hash()
 * @function
 * @grammar $Aarray.hash(values)
 * @param   {Array}         source  要遍历的数组
 * @param   {Object}        values     匹配项
 * @return  {Array}         映射后的HASH对象
 */

baidu.array.hash = baidu.array.hash || function(values){
    var result = {},
        vl = values && values.length,
        i, n,source;
    
    (arguments.length > 1) ?
        (source = values,values = arguments[1]) :
        (source = this);
    
    for (i=0, n=source.length; i < n; i++) {
        result[source[i]] = (vl && vl > i) ? values[i] : true;
    }
    return result;
};
