/*
 * @author wangxiao
 * @email  1988wangxiao@gmail.com
 */

///import baidu.string;



/**
 * @description 将目标字符串中可能会影响正则表达式构造的字符串进行转义
 * @function 
 * @name baidu.string.escapeReg()
 * @grammar baidu.string.escapeReg(str)
 * @param {String} str 目标字符串
 * @return {String} 转义后的字符串
 */

baidu.string.escapeReg = baidu.string.escapeReg || function(txt){
    var txt;

    (arguments.length > 0) ? 
        
        (
            txt = arguments[0],

            type = baidu.type(txt),
            txt  = new String(~'string|number'.indexOf(type) ? txt : type)
        ) : (txt = this);
    return txt.replace(new RegExp("([.*+?^=!:\x24{}()|[\\]\/\\\\])", "g"), '\\\x241');
};
