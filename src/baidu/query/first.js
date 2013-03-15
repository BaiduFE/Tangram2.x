///import baidu.query;
///import baidu.query.children;
///import baidu.type;

/**
 * @fileOverview
 * @author meizz
 * @create 2012-05-28
 * @modify
 */

/**
 * @description 当前集合第一个元素
 *
 * @function
 * @name baidu.query().first()
 * @grammar baidu.query(args).first()
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象    new TangramDom
 */
baidu.query.extend({
    first : function () {
        return baidu.query(this[0]);
    }
});
