///import baidu.array;

/*
 * @fileOverview
 * @author meizz
 * @create 2012-07-30
 * @modify
 */

/**
 * @description 删除数组指定的项
 *
 * @name baidu.array.removeAt()
 * @function
 * @grammar $Array.removeAt(index)
 * @param   {Array}         source  要遍历的数组
 * @param   {Number}        index   指定项的索引位置
 * @return  {Boolean}               被删除的项
 */

baidu.array.removeAt = baidu.array.removeAt || function(index){
    var source;
    baidu.check("number", "baidu.array.removeAt");
    
    baidu.isArray(index) ?
        (source = index,index = arguments[1]) : (source = this);
        
    return Array.prototype.splice.call(source, index, 1)[0];
};
