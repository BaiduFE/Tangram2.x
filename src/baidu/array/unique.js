///import baidu.array;

/*
 * @fileOverview
 * @author meizz
 * @create 2012-07-30
 * @modify
 */

/**
 * @description 去除数组中的重复项
 *
 * @name baidu.array.unique()
 * @function
 * @grammar $Array.unique([fn])
 * @param   {Array}         source  要遍历的数组
 * @param   {Function}      fn      用于做除重对比的函数
 * @return  {Array}                 已经除重后的数组
 */

baidu.array.unique = baidu.array.unique || function(fn){
    var len,
        result,
        i, datum,source;
    
    baidu.isArray(fn) ?
        (source = fn,fn = arguments[1]) : (source = this);
        
    len = source.length;
    
    result = source.slice(0);
        
    if ('function' != typeof fn) {
        fn = function (item1, item2) {
            return item1 === item2;
        };
    }
    
    // 从后往前双重循环比较
    // 如果两个元素相同，删除后一个
    while (--len > 0) {
        datum = result[len];
        i = len;
        while (i--) {
            if (fn(datum, result[i])) {
                result.splice(len, 1);
                break;
            }
        }
    }

    len = this.length = result.length;
    for ( i=0; i<len; i++ ) {
        this[ i ] = result[ i ];
    }

    return this;
};
