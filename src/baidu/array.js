///import baidu.type;

/*
 * @fileOverview
 * @author meizz
 * @create 2012-05-20
 * @modify
 */

/**
 * @description array对象链式语法的链头
 * @name baidu.array()
 * @function
 * @grammar baidu.array(array)
 * @param   {Array}         array   Array对象
 * @return  {TangramArray}          返回TangramArray对象，该对象被注入链式方法。
 */

baidu.array = baidu.array || function(array){
    var  pro = baidu.array,
         ap = Array.prototype,
         key;
    baidu.type( array ) != "array" && ( array = [] );
    for ( key in pro ) {
        //ap[key] || (array[key] = pro[key]);
        array[key] = pro[key];
    }
    return array;
};