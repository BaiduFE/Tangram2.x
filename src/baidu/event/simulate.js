/**
 * @author dron
 */

///import baidu.query.contains;
///import baidu.each;
///import baidu.event;
///import baidu.event._core;

void function( special ){
    if( special.mousewheel )return ;
    var ff = /firefox/i.test(navigator.userAgent), 
        ie = /msie/i.test(navigator.userAgent);

    baidu.each( { mouseenter: "mouseover", mouseleave: "mouseout" }, function( name, fix ){
        special[ name ] = {
            bindType: fix,
            pack: function( fn ){
                var contains = baidu.query.contains;
                return function( e ){ // e instance of baidu.event
                    var related = e.relatedTarget;
                    e.type = name;
                    if( !related || ( related !== this && !contains( this, related ) ) )
                        return fn.apply( this, arguments );
                }
            }
        }
    } );

    if( !ie )
        baidu.each( { focusin: "focus", focusout: "blur" }, function( name, fix ){
            special[ name ] = {
                bindType: fix,
                attachElements: "textarea,select,input,button,a"
            }
        } );

    special.mousewheel = {
        bindType: ff ? "DOMMouseScroll" : "mousewheel",
        pack: function( fn ){
            return function( e ){ // e instance of baidu.event
                var oe = e.originalEvent;
                e.type = "mousewheel";
                e.wheelDelta = e.wheelDelta || ( ff ? oe.detail * -40 : oe.wheelDelta ) || 0;
                return fn.apply( this, arguments );
            }
        }
    };

}( baidu.event.special );