///import baidu.query;
///import baidu.array.unique;

/**
 * @fileOverview
 * @author meizz
 * @create 2012-05-28
 * @modify
 */

/**
 * @description 去重
 *
 * @function
 * @name baidu.unique
 * @grammar baidu.query(args).unique([fn])
 * @param   {Function}      fn(a, b)    [可选]
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象    new TangramDom
 */
baidu.query.extend({
    unique : function (fn) {
        return baidu.query(baidu.array(this.toArray()).unique(fn));
    }
});
