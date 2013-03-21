///import baidu.array;

/*
 * @fileOverview
 * @description 清空数组的元素
 * @author meizz
 * @create 2012-07-30
 * @modify
 */

/**
 * @description 清空数组
 *
 * @name baidu.array.empty()
 * @function
 * @grammar $Array.empty()
 * @param   {Array}         source  要遍历的数组
 * @return  {Array}             空数组
 */

baidu.array.empty = baidu.array.empty || function(){
    var source;
    
    source = arguments[0] || this;

    source.length = 0;
    return source;
};
