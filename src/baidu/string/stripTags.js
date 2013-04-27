/*
 * @author wangxiao
 * @email  1988wangxiao@gmail.com
 */


///import baidu.string;

/**
 * @description 去掉字符串中的html标签
 * @function
 * @name baidu.string.stripTags()
 * @grammar baidu.string.stripTags(str)
 * @param {String} str 目标字符串.
 * @return {String} 去掉html标签后的字符串.
 */


baidu.string.stripTags = baidu.string.stripTags || function() {
    var txt;

    (arguments.length > 0) ?

        (
            txt = arguments[0],

            type = baidu.type(txt),
            txt = new String(~'string|number'.indexOf(type) ? txt : type)
        ) : (txt = this);
    return (txt || '').replace(/<[^>]+>/g, '');
};
