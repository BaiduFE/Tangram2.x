///import baidu.type;
///import baidu.array;
///import baidu.each;
///import baidu.forEach;
/*
 * @fileOverview
 * @description 枚举数组的元素执行某个操作
 * @author meizz
 * @create 2012-07-30
 * @modify
 */

/**
 * @description 遍历数组里的每一项进行指定操作
 *
 * @name baidu.array.each()
 * @function
 * @grammar array.each(iterator[,context])
 * @param   {Array}         source  要遍历的数组
 * @param   {Function}      iterator(item,index,array)    枚举器，函数
 * @param   {Object}        context                         方法作用域
 * @return  {Array}         数组
 */


baidu.array.each = baidu.array.each || function(iterator, context){
    var source;
    baidu.isArray(iterator) ?
        (source = iterator,iterator = context,context = arguments[2]) : (source = this);
    return baidu.each(source, iterator, context);
};

baidu.array.forEach = baidu.array.forEach || function(iterator, context){
    var source;
    baidu.isArray(iterator) ?
        (source = iterator,iterator = context,context = arguments[2]) : (source = this);
    return baidu.forEach(source, iterator, context);
};
