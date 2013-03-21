/*
 * @author wangxiao
 * @email  1988wangxiao@gmail.com
 */

///import baidu.string;



/**
 * @description 获取目标字符串在gbk编码下的字节长度
 * @function 
 * @name baidu.string.getByteLength()
 * @grammar baidu.string.getByteLength(str)
 * @param {String} str 目标字符串
 * @return {Number} 字节长度
 */
baidu.string.getByteLength = baidu.string.getByteLength || function(){
    var txt;
    
    (arguments.length > 0) ? 
        
        (
            txt = arguments[0],

            type = baidu.type(txt),
            txt  = new String(~'string|number'.indexOf(type) ? txt : type)
        ) : (txt = this);
    return txt.replace(/[^\x00-\xff]/g, 'ci').length;
    //获取字符在gbk编码下的字节长度, 实现原理是认为大于127的就一定是双字节。如果字符超出gbk编码范围, 则这个计算不准确
};