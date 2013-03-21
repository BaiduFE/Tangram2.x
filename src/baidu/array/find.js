///import baidu.type;
///import baidu.array;

/*
 * @fileOverview
 * @author meizz
 * @create 2012-07-30
 * @modify
 */

/**
 * @description 从数组中寻找符合条件的第一个元素
 *
 * @name baidu.array.find()
 * @function
 * @grammar $Array.find([fn])
 * @param   {Array}         source  要遍历的数组
 * @param   {Function}     fn    用于做对比的函数
 * @return  {Object}                    匹配的项
 */

baidu.array.find = baidu.array.find || function(iterator){
    var i, item, n,source;
    
    baidu.isArray(iterator) ?
        (source = iterator,iterator = arguments[1]) : (source = this);
    
    n = source.length;
    
    if (baidu.type(iterator) == "function") {
        for (i=0; i<n; i++) {
            item = source[i];
            if (iterator.call(source, item, i, source) === true) {
                return item;
            }
        }
    }

    return null;
};

