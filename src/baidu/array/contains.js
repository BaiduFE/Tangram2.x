///import baidu.array.indexOf;
/*
 * @fileoverview
 * @author meizz
 * @create 2012-07-30
 * @modify
 */

/**
 * @description 数组包含某项
 *
 * @name baidu.array.contains()
 * @function
 * @grammar $Array.contains( item )
 * @param   {Array}       source  要遍历的数组
 * @param   {Object}      item  被包含项
 * @return  {Boolean}           是否包含
 */

baidu.array.contains = baidu.array.contains || function(item){
    var source;
    (arguments.length > 1) ?
        (source = item,item = arguments[1]) :
        (source = this);

    return !!~baidu.array.indexOf(source,item);
};

