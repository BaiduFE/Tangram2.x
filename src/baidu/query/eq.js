///import baidu.query;

/*
 * @fileOverview
 * @author meizz
 * @create 2012-06-06
 * @modify
 */

/**
 * @description 获取TangramDom里的第N个元素，返回新的TangramDom，可以传入负整数，反向取
 * @function
 * @name baidu.query().eq()
 * @grammar baidu.query(args).eq(index)
 * @param   {Number}        index    指定的元素下标，如果指定为负数，则从
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象    new TangramDom
 */
baidu.query.extend({
    eq : function (index) {
        baidu.check("number","baidu.query.eq");
        return baidu.query(this.get(index));
    }
});
