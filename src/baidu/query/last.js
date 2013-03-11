///import baidu.query;


/**
 * @fileoverview
 * @author meizz
 * @create 2012-05-28
 * @modify
 */

/**
 * @description 当前集合最后一个对象
 *
 * @function
 * @name baidu.query().last()
 * @grammar baidu.query(args).last()
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象    new TangramDom
 */
baidu.query.extend({
    last : function () {
        return baidu.query(this.get(-1));
    }
});