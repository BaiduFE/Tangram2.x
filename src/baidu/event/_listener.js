/**
 * @author dron
 */

///import baidu.event

void function( base, _listener ){
    if( base._listener )return ;
    
    _listener = base._listener = {};
    
    if( window.addEventListener )
        _listener.add = function( target, name, fn ){
            target.addEventListener( name, fn, false );
        };
    else if( window.attachEvent )
        _listener.add = function( target, name, fn ){
            target.attachEvent( "on" + name, fn );
        };
}( baidu.event );