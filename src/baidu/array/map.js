///import baidu.array;
///import baidu.type;

/*
 * @fileOverview
 * @author meizz
 * @create 2012-07-30
 * @modify
 */

/**
 * @description 数组映射
 *
 * @name baidu.array.map()
 * @function
 * @grammar baidu.array(array).map(iterator,context)
 * @param   {Array}         source      要遍历的数组
 * @param   {Function}      iterator    指定的执行方法
 * @param   {Object}        context     方法作用域
 * @return  {Array}                     映射操作后的数组
 */


baidu.array.map = baidu.array.map || function(iterator, context){
    var len,array,source;

    baidu.check("function(,.+)?","baidu.array.map");
    
    baidu.isArray(iterator) ?
        (source = iterator,iterator = context,context = arguments[2]) : (source = this);
    
    len = source.length;
    array = [];
    
    for(var i = 0; i < len; i++){
        array[i] = iterator.call(context || source, source[i], i, source);
    }
    return array;
};

