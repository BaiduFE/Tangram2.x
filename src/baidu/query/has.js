///import baidu.query;
///import baidu.forEach;
///import baidu.query.find;
/*
 * @fileOverview
 * @author meizz
 * @create 2012-05-28
 * @modify
 */

/**
 * @description 查找当前集合匹配条件的元素
 *
 * @function
 * @name baidu.query().has()
 * @grammar baidu.query(args).has(selector)
 * @param   {Object}            selector    选择器.
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象    new TangramDom.
 */
baidu.query.extend({
    has: function(selector) {
        var a = []
            , td = baidu.query(document.body);

        baidu.forEach(this, function(dom) {
            td[0] = dom;
            td.find(selector).length && a.push(dom);
        });

        return baidu.query(a);
    }
});
