/*
 * @author dron
 */

///import baidu.query.on;
///import baidu.query.off;

/**
 * @description 卸载事件代理
 * @function
 * @name baidu.query().undelegate()
 * @grammar baidu.query(args).undelegate(selector,type,fn)
 * @param {String} selector 选择器表达式.
 * @param {String} type 事件名称，多个事件请用半角逗号或半空隔开.
 * @param {Function} fn 事件函数.
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象.
 */

baidu.query.extend({
    undelegate: function(selector, type, fn ) {
        return this.off(type, selector, fn);
    }
});
