/*
 * Tangram
 * Copyright 2009 Baidu Inc. All rights reserved.
 */
///import pack.baidu.i18n;
/**
 * @description 字符转换函数
 * @name baidu.i18n.string
 * @namespace
 */
baidu.i18n.string = baidu.i18n.string || /*@lends baidu.i18n.string.prototype*/{
    
    /**
     * @description 按照某种语言的格式去掉字符串两边的空白字符
     * @name baidu.i18n.string.trim
     * @function
     * @grammar baidu.i18n.string.trim(source, locale)
     * @param {String} source 需要格式化的语言
     * @param {String} locale [可选] 目标语言
     * @return {String} 修剪后的字符串
     */
    trim: function(source, locale){
        var pat = baidu.i18n.cultures[locale || baidu.i18n.currentLocale].whitespace;
        return String(source).replace(pat,"");
    },

    /**
     * @description 将传入的字符串翻译成目标语言
     * @name baidu.i18n.string.translation
     * @function
     * @grammar baidu.i18n.string.translation(source, locale)
     * @param {String} source 需要进行翻译的字符串
     * @param {String} locale [可选] 目标语言
     * @return {String} 转换后的字符
     */
    translation: function(source, locale){
        var tOpt = baidu.i18n.cultures[locale || baidu.i18n.currentLocale].language;

        return tOpt[source] || '';
    }

};
