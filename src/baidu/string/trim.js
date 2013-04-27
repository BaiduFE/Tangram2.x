/*
 * @author wangxiao
 * @email  1988wangxiao@gmail.com
 */

///import baidu.string;



/**
 * @description 删除目标字符串两端的空白字符
 * @function
 * @name baidu.string.trim()
 * @grammar baidu.string.trim(str)
 * @param {String} str 目标字符串.
 * @return {String} 删除两端空白字符后的字符串.
 */



baidu.string.trim = baidu.string.trim || function() {
    var core_trim = String.prototype.trim;
    return core_trim && !core_trim.call('\uFEFF\xA0') ?
        function(txt) {
            txt = arguments.length ? txt : this;
            return txt == null ? '' : core_trim.call(txt);
        } : function(txt) {
            var trimer = new RegExp('(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+\x24)', 'g'),
                txt = arguments.length ? txt : this;
            return txt.replace(trimer, '');
        };

}();
