/**
 * @author linlingyu
 */
module('baidu.query.off');
function Div(noAppend){
    var div = this._div = document.createElement('div');
    !noAppend && document.body.appendChild(div);
}
Div.prototype.get = function(){return this._div;}
Div.prototype.dispose = function(){
    var parentElement = this._div && this._div.parentNode;
    parentElement && parentElement.removeChild(this._div);
    this._div = null;
}

test('remove a event', function(){
    expect(1);
    var c = new Div(),
        div = c.get();
    function handler(){
        ok(true, 'event not remove');
    }
    div.addEventListener && div.addEventListener('click', handler, false);
    div.attachEvent && div.attachEvent('onclick', handler);
    baidu.query(div).off('click', handler);
    ua.fireMouseEvent(div, 'click');
    div = null;
    c.dispose();
});


test('div uninstall event', function(){
    stop();
    ua.importsrc('baidu.query.on,baidu.query.trigger', function(){
        expect(10);
        var c = new Div(),
            div = c.get();
        function handler(){ok(true, 'event bind');}
        baidu.query(div).on('click', handler); 
        ua.fireMouseEvent(div, 'click'); // 1
        baidu.query(div).off('click', handler);
        ua.fireMouseEvent(div, 'click');
        div = null;
        c.dispose();
        //
        
        c = new Div();
        div = c.get();
        baidu.query(div).on('click', function(){
            ok(true, 'first event'); // 2
        }).on('click', function(){
            ok(true, 'second event'); // 3
        }).on('click', function(){
            ok(true, 'third event'); // 4
        });
        ua.fireMouseEvent(div, 'click');
        baidu.query(div).off('click');
        ua.fireMouseEvent(div, 'click');
        div = null;
        c.dispose();
        // //
        
        var map = {
            click: function(){ok(true, 'map first event');},
            mouseover: function(){ok(true, 'map second event');},
            mouseout: function(){ok(true, 'map third event');}
        };
        c = new Div();
        div = c.get();
        baidu.query(div).on(map);
        ua.fireMouseEvent(div, 'mouseover');
        ua.fireMouseEvent(div, 'click');
        ua.fireMouseEvent(div, 'mouseout');
        baidu.query(div).off(map);
        ua.fireMouseEvent(div, 'mouseover');
        ua.fireMouseEvent(div, 'click');
        ua.fireMouseEvent(div, 'mouseout');
        div = null;
        c.dispose();
        // //
        
        c = new Div();
        div = c.get();
        baidu.query(div).on(map);
        ua.fireMouseEvent(div, 'mouseover');
        ua.fireMouseEvent(div, 'click');
        ua.fireMouseEvent(div, 'mouseout');
        baidu.query(div).off();
        ua.fireMouseEvent(div, 'mouseover');
        ua.fireMouseEvent(div, 'click');
        ua.fireMouseEvent(div, 'mouseout');
        div = null;
        c.dispose();
        
        // //
        c = new Div();
        div = c.get();
        function handler(){ok(true, 'double bind');}
        baidu.query(div).on('click', handler);
        baidu.query(div).on('click', handler);
        baidu.query(div).off('click', handler);
        ua.fireMouseEvent(div, 'click');
        
        
        start();
    }, 'baidu.query.on', 'baidu.query.off');
});

test('span uninstall event', function(){
    expect(4);
    var span = document.createElement('span'),
        c = new Div(true);
    document.body.appendChild(span);
    span.appendChild(c.get());
    function handler(){
        ok(true, 'mouseup event trigger');
    }
    baidu.query(span).on('mouseup', 'div', handler);
    ua.fireMouseEvent(c.get(), 'mouseup');
    baidu.query(span).off('mouseup', 'div', handler);
    ua.fireMouseEvent(c.get(), 'mouseup');
    ua.fireMouseEvent(span, 'mouseup');
    c.dispose();
    document.body.removeChild(span);
    
    //
    var map = {
        mousedown: function(){ok(true, 'mousedown event triger');},
        mousemove: function(){ok(true, 'mousemove event trigger');},
        mouseup: function(){ok(true, 'mouseup event trigger');}
    };
    span = document.createElement('span');
    c = new Div(true);
    document.body.appendChild(span);
    span.appendChild(c.get());
    baidu.query(span).on(map, 'div', function(){ok(false, 'exception')});
    ua.fireMouseEvent(c.get(), 'mousedown');
    ua.fireMouseEvent(c.get(), 'mousemove');
    ua.fireMouseEvent(c.get(), 'mouseup');
    baidu.query(span).off(map, 'div');
    ua.fireMouseEvent(c.get(), 'mousedown');
    ua.fireMouseEvent(c.get(), 'mousemove');
    ua.fireMouseEvent(c.get(), 'mouseup');
    c.dispose();
    document.body.removeChild(span);
});


test("dom为空的情况",function(){
    var result = baidu("#baidujsxiaozu").off("wangxiao");
    ok(result);
});

test('window事件解绑定', function(){
    expect(1);
    function resizeHandler(){
        ok(true, 'resize event trigger');
    }
    baidu(top.window).on('resize', resizeHandler);
    baidu(top.window).trigger('resize');
    baidu(top.window).off('resize', resizeHandler);
    baidu(top.window).trigger('resize');
});