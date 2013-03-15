/*
 * @author dron
 */

///import baidu.event._core;

void function(){
    var arr = ("blur focus focusin focusout load resize scroll unload click dblclick " +
    "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave mousewheel " +
    "change select submit keydown keypress keyup error contextmenu").split(" ");

    var conf = {};
    var create = function( name ){
        conf[ name ] = function( data, fn ){
            if( fn == null )
                fn = data,
                data = null;

            return arguments.length > 0 ?
                this.on( name, null, data, fn ) :
                this.trigger( name );
        }
    };

    for(var i = 0, l = arr.length; i < l; i ++)
        create( arr[i] );

    baidu.query.extend( conf );
}();

/**
 * @description TangramDom集合触发 blur 事件
 * @function
 * @name baidu.query().blur()
 * @grammar baidu.query(args).blur()
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合添加 blur 事件监听
 * @function
 * @name baidu.query().blur()
 * @grammar baidu.query(args).blur([data,]fn)
 * @param {Object} data 触发事件函数时，携带event.data 上的数据
 * @param {Function} fn 事件函数
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合触发 change 事件
 * @function
 * @name baidu.query().change()
 * @grammar baidu.query(args).change()
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合添加 change 事件监听
 * @function
 * @name baidu.query().change()
 * @grammar baidu.query(args).change([data,]fn)
 * @param {Object} data 触发事件函数时，携带event.data 上的数据
 * @param {Function} fn 事件函数
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合触发 click 事件
 * @function
 * @name baidu.query().click()
 * @grammar baidu.query(args).click()
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合添加 click 事件监听
 * @function
 * @name baidu.query().click()
 * @grammar baidu.query(args).click([data,]fn)
 * @param {Object} data 触发事件函数时，携带event.data 上的数据
 * @param {Function} fn 事件函数
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合触发 dblclick 事件
 * @function
 * @name baidu.query().dblclick()
 * @grammar baidu.query(args).dblclick()
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合添加 dblclick 事件监听
 * @function
 * @name baidu.query().dblclick()
 * @grammar baidu.query(args).dblclick([data,]fn)
 * @param {Object} data 触发事件函数时，携带event.data 上的数据
 * @param {Function} fn 事件函数
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合触发 error 事件
 * @function
 * @name baidu.query().error()
 * @grammar baidu.query(args).error()
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合添加 error 事件监听
 * @function
 * @name baidu.query().error()
 * @grammar baidu.query(args).error([data,]fn)
 * @param {Object} data 触发事件函数时，携带event.data 上的数据
 * @param {Function} fn 事件函数
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合触发 focus 事件
 * @function
 * @name baidu.query().focus()
 * @grammar baidu.query(args).focus()
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合添加 focus 事件监听
 * @function
 * @name baidu.query().focus()
 * @grammar baidu.query(args).focus([data,]fn)
 * @param {Object} data 触发事件函数时，携带event.data 上的数据
 * @param {Function} fn 事件函数
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合触发focusin 事件
 * @function
 * @name baidu.query().focusin()
 * @grammar baidu.query(args).focusin()
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合添加 focusin 事件监听
 * @function
 * @name baidu.query().focusin()
 * @grammar baidu.query(args).focusin([data,]fn)
 * @param {Object} data 触发事件函数时，携带event.data 上的数据
 * @param {Function} fn 事件函数
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合触发focusout事件
 * @function
 * @name baidu.query().focusout()
 * @grammar baidu.query(args).focusout()
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合添加 focusout 事件监听
 * @function
 * @name baidu.query().focusout()
 * @grammar baidu.query(args).focusout([data,]fn)
 * @param {Object} data 触发事件函数时，携带event.data 上的数据
 * @param {Function} fn 事件函数
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合触发 keydown 事件
 * @function
 * @name baidu.query().keydown()
 * @grammar baidu.query(args).keydown()
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合添加 keydown 事件监听
 * @function
 * @name baidu.query().keydown()
 * @grammar baidu.query(args).keydown([data,]fn)
 * @param {Object} data 触发事件函数时，携带event.data 上的数据
 * @param {Function} fn 事件函数
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合触发keypress事件
 * @function
 * @name baidu.query().keypress()
 * @grammar baidu.query(args).keypress()
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合添加 keypress 事件监听
 * @function
 * @name baidu.query().keypress()
 * @grammar baidu.query(args).keypress([data,]fn)
 * @param {Object} data 触发事件函数时，携带event.data 上的数据
 * @param {Function} fn 事件函数
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合触发 keyup 事件
 * @function
 * @name baidu.query().keyup()
 * @grammar baidu.query(args).keyup()
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合添加 keyup 事件监听
 * @function
 * @name baidu.query().keyup()
 * @grammar baidu.query(args).keyup([data,]fn)
 * @param {Object} data 触发事件函数时，携带event.data 上的数据
 * @param {Function} fn 事件函数
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合触发 mousedown 事件
 * @function
 * @name baidu.query().mousedown()
 * @grammar baidu.query(args).mousedown()
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合添加 mousedown 事件监听
 * @function
 * @name baidu.query().mousedown()
 * @grammar baidu.query(args).mousedown([data,]fn)
 * @param {Object} data 触发事件函数时，携带event.data 上的数据
 * @param {Function} fn 事件函数
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合触发 mouseenter 事件
 * @function
 * @name baidu.query().mouseenter()
 * @grammar baidu.query(args).mouseenter()
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合添加 mouseenter 事件监听
 * @function
 * @name baidu.query().mouseenter()
 * @grammar baidu.query(args).mouseenter([data,]fn)
 * @param {Object} data 触发事件函数时，携带event.data 上的数据
 * @param {Function} fn 事件函数
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合触发 mouseleave 事件
 * @function
 * @name baidu.query().mouseleave()
 * @grammar baidu.query(args).mouseleave()
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合添加 mouseleave 事件监听
 * @function
 * @name baidu.query().mouseleave()
 * @grammar baidu.query(args).mouseleave([data,]fn)
 * @param {Object} data 触发事件函数时，携带event.data 上的数据
 * @param {Function} fn 事件函数
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合触发 mousemove 事件
 * @function
 * @name baidu.query().mousemove()
 * @grammar baidu.query(args).mousemove()
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合添加 mousemove 事件监听
 * @function
 * @name baidu.query().mousemove()
 * @grammar baidu.query(args).mousemove([data,]fn)
 * @param {Object} data 触发事件函数时，携带event.data 上的数据
 * @param {Function} fn 事件函数
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合触发 mouseout 事件
 * @function
 * @name baidu.query().mouseout()
 * @grammar baidu.query(args).mouseout()
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合添加 mouseout 事件监听
 * @function
 * @name baidu.query().mouseout()
 * @grammar baidu.query(args).mouseout([data,]fn)
 * @param {Object} data 触发事件函数时，携带event.data 上的数据
 * @param {Function} fn 事件函数
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合触发 mouseover 事件
 * @function
 * @name baidu.query().mouseover()
 * @grammar baidu.query(args).mouseover()
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合添加 mouseover 事件监听
 * @function
 * @name baidu.query().mouseover()
 * @grammar baidu.query(args).mouseover([data,]fn)
 * @param {Object} data 触发事件函数时，携带event.data 上的数据
 * @param {Function} fn 事件函数
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合触发 mouseup 事件
 * @function
 * @name baidu.query().mouseup()
 * @grammar baidu.query(args).mouseup()
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合添加 mouseup 事件监听
 * @function
 * @name baidu.query().mouseup()
 * @grammar baidu.query(args).mouseup([data,]fn)
 * @param {Object} data 触发事件函数时，携带event.data 上的数据
 * @param {Function} fn 事件函数
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合触发 resize 事件
 * @function
 * @name baidu.query().resize()
 * @grammar baidu.query(args).resize()
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合添加 resize 事件监听
 * @function
 * @name baidu.query().resize()
 * @grammar baidu.query(args).resize([data,]fn)
 * @param {Object} data 触发事件函数时，携带event.data 上的数据
 * @param {Function} fn 事件函数
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合触发 scroll 事件
 * @function
 * @name baidu.query().scroll()
 * @grammar baidu.query(args).scroll()
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合添加 scroll 事件监听
 * @function
 * @name baidu.query().scroll()
 * @grammar baidu.query(args).scroll([data,]fn)
 * @param {Object} data 触发事件函数时，携带event.data 上的数据
 * @param {Function} fn 事件函数
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合触发 select 事件
 * @function
 * @name baidu.query().select()
 * @grammar baidu.query(args).select()
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合添加 select 事件监听
 * @function
 * @name baidu.query().select()
 * @grammar baidu.query(args).select([data,]fn)
 * @param {Object} data 触发事件函数时，携带event.data 上的数据
 * @param {Function} fn 事件函数
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合触发 submit 事件
 * @function
 * @name baidu.query().submit()
 * @grammar baidu.query(args).submit()
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合添加 submit 事件监听
 * @function
 * @name baidu.query().submit()
 * @grammar baidu.query(args).submit([data,]fn)
 * @param {Object} data 触发事件函数时，携带event.data 上的数据
 * @param {Function} fn 事件函数
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合触发 load 事件
 * @function
 * @name baidu.query().load()
 * @grammar baidu.query(args).load()
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合添加 load 事件监听
 * @function
 * @name baidu.query().load()
 * @grammar baidu.query(args).load([data,]fn)
 * @param {Object} data 触发事件函数时，携带event.data 上的数据
 * @param {Function} fn 事件函数
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合触发 unload 事件
 * @function
 * @name baidu.query().unload()
 * @grammar baidu.query(args).unload()
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合添加 unload 事件监听
 * @function
 * @name baidu.query().unload()
 * @grammar baidu.query(args).unload([data,]fn)
 * @param {Object} data 触发事件函数时，携带event.data 上的数据
 * @param {Function} fn 事件函数
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合触发 contextmenu 事件
 * @function
 * @name baidu.query().contextmenu()
 * @grammar baidu.query(args).contextmenu()
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合添加 contextmenu 事件监听
 * @function
 * @name baidu.query().contextmenu()
 * @grammar baidu.query(args).contextmenu([data,]fn)
 * @param {Object} data 触发事件函数时，携带event.data 上的数据
 * @param {Function} fn 事件函数
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */

/**
 * @description TangramDom集合添加 mousewheel 事件监听
 * @function
 * @name baidu.query().mousewheel()
 * @grammar baidu.query(args).mousewheel([data,]fn)
 * @param {Object} data 触发事件函数时，携带event.data 上的数据
 * @param {Function} fn 事件函数
 * @return {TangramDom} 返回之前匹配元素的TangramDom对象
 */