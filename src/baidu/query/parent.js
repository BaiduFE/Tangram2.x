///import baidu.query;
///import baidu.forEach;
///import baidu.query.match;

/**
 * @fileOverview
 * @author meizz
 * @create 2012-05-28
 * @modify
 */

/**
 * @description 取得一个包含着所有匹配元素的唯一父元素的元素集合
 *
 * @function
 * @name baidu.query().parent()
 * @grammar baidu.query(args).parent([filter])
 * @param   {String|Function}   filter      [可选]过滤函数
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象    new TangramDom
 */
baidu.query.extend({
    parent : function (filter) {
        var array = [];

        baidu.forEach(this, function(dom) {
            (dom = dom.parentNode) && dom.nodeType == 1 && array.push(dom);
        });

        return baidu.query( baidu.query.match(array, filter) );
    }
});
