///import baidu.query;
///import baidu.query.match;

/**
 * @fileoverview
 * @author meizz
 * @create 2012-05-28
 * @modify
 */

/**
 * @description 对 TangramDom 里的所有元素进行筛选
 * @function
 * @name baidu.query().filter()
 * @grammar baidu.query(args).filter(selector|tangramDom|HTMLElement|fn)
 * @param   {String}        selector    CSS选择器
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象    new TangramDom
 */

/**
 * @description 对 TangramDom 里的所有元素进行筛选
 * @function
 * @name baidu.query().filter()
 * @grammar baidu.query(args).filter(selector|tangramDom|HTMLElement|fn)
 * @param   {TangramDom}    tangramDom 对象
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象    new TangramDom
 */

/**
 * @description 对 TangramDom 里的所有元素进行筛选
 * @function
 * @name baidu.query().filter()
 * @grammar baidu.query(args).filter(selector)
 * @param   {Selector} selector 选择器
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象    new TangramDom
 */

/**
 * @description 对 TangramDom 里的所有元素进行筛选
 * @function
 * @name baidu.query().filter()
 * @grammar baidu.query(args).filter(selector|tangramDom|HTMLElement|fn)
 * @param   {Function}   fn   筛选的指定方法
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象    new TangramDom
 */

baidu.query.extend({
    filter : function (selector) {
        return baidu.query(baidu.query.match(this, selector));
    }
});
