/*
 * @author wangxiao
 * @email  1988wangxiao@gmail.com
 */

///import baidu.number;

/**
 * @description 为目标数字添加逗号分隔
 * @function 
 * @name baidu.number().comma()
 * @grammar baidu.number(num).comma([len])
 * @param {Number} len 两次逗号之间的数字位数，默认为3位
 * @return {String} 添加逗号分隔后的字符串
 */

/**
 * @description 为目标数字添加逗号分隔
 * @function 
 * @name baidu.number.comma()
 * @grammar baidu.number.comma(num[, len])
 * @param {Number} num 需要处理的数字
 * @param {Number} len 两次逗号之间的数字位数，默认为3位
 * @return {String} 添加逗号分隔后的字符串
 */
 
baidu.number.comma = baidu.number.comm || function(len){
    var source = this;
    if(source._type_ !== '$Number'){
        source = len;
        len = arguments[1];
    }
    if(!len || len < 1){
        len = 3;
    }
    source = String(source).split('.');
    source[0] = source[0].replace(new RegExp('(\\d)(?=(\\d{'+ len +'})+$)','ig'), '$1,');
    return source.join('.');
}
