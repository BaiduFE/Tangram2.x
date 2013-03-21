/*
 * @author wangxiao
 * @email  1988wangxiao@gmail.com
 */

///import baidu.string;



/**
 * @description 对目标字符串进行html编码
 * @function 
 * @name baidu.string.encodeHTML()
 * @grammar baidu.string.encodeHTML(str)
 * @param {String} str 目标字符串
 * @return {String} html编码后的字符串
 */




baidu.string.encodeHTML = baidu.string.encodeHTML || function(txt){
    var txt;

    (arguments.length > 0) ? 
        
        (
            txt = arguments[0],

            type = baidu.type(txt),
            txt  = new String(~'string|number'.indexOf(type) ? txt : type)
        ) : (txt = this);
    return txt.replace(/&/g,'&amp;')
                .replace(/</g,'&lt;')
                .replace(/>/g,'&gt;')
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#39;");
};