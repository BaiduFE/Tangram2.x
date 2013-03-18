///import baidu.query;
///import baidu.forEach;
///import baidu.merge;
///import baidu.query.match;

/*
 * @fileOverview
 * @author meizz
 * @create 2012-05-28
 * @modify
 */

/**
 * @description 取得一个包含着所有匹配元素的祖先元素的元素集合（不包含根元素）。可以通过一个可选的表达式进行筛选。
 *
 * @function
 * @name baidu.query().parents()
 * @grammar baidu.query(args).parents([filter])
 * @param   {String|Function}   filter      [可选]过滤函数
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象    new TangramDom
 */
baidu.query.extend({
    parents : function (filter) {
        var array = [];

        baidu.forEach(this, function(dom) {
            var a = [];

            while ((dom = dom.parentNode) && dom.nodeType == 1) a.push(dom);

            baidu.merge(array, a);
        });

        return baidu.query( baidu.query.match(array, filter) );
    }
});
