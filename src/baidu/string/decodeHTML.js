/*
 * @author wangxiao
 * @email  1988wangxiao@gmail.com
 */

///import baidu.string;



/**
 * @description 对目标字符串进行html解码
 * @function 
 * @name baidu.string.decodeHTML()
 * @grammar baidu.string.decodeHTML(str)
 * @param {String} str 目标字符串
 * @return {String} html解码后的字符串
 */

baidu.string.decodeHTML = baidu.string.decodeHTML || function(){

    var txt,str;

    (arguments.length > 0) ? 
        
        (
            txt = arguments[0],

            type = baidu.type(txt),
            txt  = new String(~'string|number'.indexOf(type) ? txt : type)
            

        ) : (txt = this);
    str = txt
        .replace(/&quot;/g,'"')
        .replace(/&lt;/g,'<')
        .replace(/&gt;/g,'>')
        .replace(/&amp;/g, "&")    
    //处理转义的中文和实体字符
    return str.replace(/&#([\d]+);/g, function(_0, _1){
        return String.fromCharCode(parseInt(_1, 10));
    });
};