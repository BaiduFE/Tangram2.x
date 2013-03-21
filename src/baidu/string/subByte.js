/*
 * @author wangxiao
 * @email  1988wangxiao@gmail.com
 */

///import baidu.string.getByteLength;

/**
 * @description 对目标字符串按gbk编码截取字节长度
 * @function 
 * @name baidu.string.subByte()
 * @grammar baidu.string.subByte(str, len[, tail])
 * @param {String} str 目标字符串
 * @param {Number} len 需要截取的字节长度
 * @param {String} tail [可选]追加字符串
 * @return {String} 字符串截取结果
 */


baidu.string.subByte = baidu.string.subByte || function(len, tail){
    var txt,type;
    !baidu.isNumber(len) ? 
        (
            txt = len,
            len = tail,
            tail = arguments[2],
            type = baidu.type(txt),
            txt  = new String(~'string|number'.indexOf(type) ? txt : type)
        ) : (txt = this);

    
    if(len < 0 || baidu.string.getByteLength(txt) <= len){
        return txt.valueOf()/* + tail*/; // 20121109 mz 去掉tail
    }
    //thanks 加宽提供优化方法
    var source = txt.substr(0, len)
        .replace(/([^\x00-\xff])/g,"\x241 ")//双字节字符替换成两个
        .substr(0, len)//截取长度
        .replace(/[^\x00-\xff]$/,"")//去掉临界双字节字符
        .replace(/([^\x00-\xff]) /g,"\x241");//还原
    return source + (tail || "");
};