///import baidu.array;

/*
 * @fileOverview
 * @author meizz
 * @create 2012-07-30
 * @modify
 */

/**
 * @description 删除数组项
 *
 * @name baidu.array.remove()
 * @function
 * @grammar $Array.remove(item)
 * @param   {Array}         source  要遍历的数组
 * @param   {Object}        item    数组匹配项
 * @return  {Array}                 操作后的数组
 */

baidu.array.remove = baidu.array.remove || function(match){
    var n, source;
    
    baidu.isArray(match) ?
        (source = match,match = arguments[1]) : (source = this);
        
    n = source.length;
    
    while (n--) {
        if (source[n] === match) {
            source.splice(n, 1);
        }
    }
    return source;
};

