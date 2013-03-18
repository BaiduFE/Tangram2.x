/*
 * Tangram
 * Copyright 2009 Baidu Inc. All rights reserved.
 */

///import pack.baidu.i18n;
///import pack.baidu.i18n.number;
///import pack.baidu.i18n.cultures;
/**
 * @description 货币转换函数集合
 * @name baidu.i18n.currency
 * @namespace
 */
baidu.i18n.currency = baidu.i18n.currency || /* @lends baidu.i18n.currency.prototype */{
    
    /**
     * @description 将传入的数字或者文字某种语言的货币格式进行格式化
     * @name baidu.i18n.currency.format
     * @function
     * @grammar baidu.i18n.currency.format(number, sLocale, tLocale)
     * @param {String|Number} number 需要进行格式化的数字或者文字
     * @param {String} sLocale [可选] 可选参数，若传入的number格式为字符串，则该参数必须传入
     * @param {String} tLocale [可选] 目标语言
     * @return {String} 格式化后的字符
     */
    format: function(number, sLocale, tLocale) {
        var me = this,
            sOpt = sLocale && baidu.i18n.cultures[sLocale].currency,
            tOpt = baidu.i18n.cultures[tLocale || baidu.i18n.currentLocale].currency,
            result;

        if(typeof number === "string"){
            number = number.replace(sOpt.symbol);
        }
        
        return tOpt.symbol + this._format(number, sLocale, tLocale);
    },

    /**
     * @description 按照语言的数字格式进行格式化
     * @private 
     * @param {Number | Number} number 数字
     * @param {String} sLocale [可选] 可选参数，若传入的number格式为字符串，则该参数必须传入
     * @param {String} tLocale [可选] 目标语言
     * @return {String}
     */
    _format: function(number, sLocale, tLocale){
        return baidu.i18n.number.format(number, sLocale, tLocale || baidu.i18n.currentLocale); 
    }
};
