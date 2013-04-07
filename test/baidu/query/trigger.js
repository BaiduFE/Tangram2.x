/**
 * @author linlingyu
 */
module('baidu.query.trigger');
var isFireFox = /firefox\/(\d+\.\d+)/i.test(navigator.userAgent) ? + RegExp['\x241'] : undefined;
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

function addEvent(ele, evt, handler){
    baidu(ele).on(evt, handler);
    // if(ele.addEventListener){
    //     ele.addEventListener(evt, handler, false);
    // }else if(ele.attachEvent){
    //     ele.attachEvent('on' + evt, handler);
    // }else{
    //     ele['on' + evt] = handler;
    // }
}

test('div trigger event', function(){
    expect(3);
    stop();

    ua.importsrc("baidu.query.on,baidu.event.shortcut", function(){

        var c = new Div(),
            div = c.get();

        function handler(){
            ok(true, 'click event trigger');
        }
        
        div.onclick = handler;
        baidu.query(div).trigger('click');
        div.addEventListener && div.addEventListener('mouseup', handler, false);
        div.attachEvent && div.attachEvent('onmouseup', handler);
        baidu.query(div).trigger('mouseup');
        c.dispose();
        div = null;
        
        //
        c = new Div();
        div = c.get();
        baidu(div).click(function(evt, arg0, arg1, arg2){
            equal(arg0 + arg1 + arg2, 'ABC', 'data pass to event');
        });
        baidu.query(div).trigger('click', ['A', 'B', 'C']);
        div = null;
        c.dispose();

        start();
    });    
    //
});

test('custom event', function(){
    stop();
    expect(1);
    ua.importsrc('baidu.query.bind', function(){
        var c = new Div(),
            div = c.get();

        baidu.query(div).bind('custom', function(evt, arg0, arg1, arg2){
            equal(arg0 + arg1 + arg2, 'ABC', 'custom event data pass to fn');
        });
        baidu.query(div).trigger('custom', ['A', 'B', 'C']);
        div = null;
        c.dispose();
        
        start();
    }, "baidu.query.fn.bind", "baidu.query.trigger");
});

test('all support event', function(){
    var keysEvents = ['keydown', 'keyup', 'keypress'],
        mousesEvents = ['mousedown', 'mousemove', 'mouseup', 'mouseover', 'mouseout', 'click'],
        htmlEvents = ['load', 'resize'],
        formsEvents = ['change', 'focus', 'blur', 'submit', 'reset'],
        etcEvents = ['DOMAttrModified'];

    expect(keysEvents.concat(mousesEvents).concat(htmlEvents).concat(formsEvents).concat(etcEvents).length);
    
    var input = document.createElement('input');
        input.type = 'text';

    var div = document.createElement("div");
        div.innerHTML = "<form action='' onsubmit='return false;'><input name='a' value='a' type='hidden' /></form>";

    document.body.appendChild(input);
    document.body.appendChild(div);
    var form = div.firstChild;

    $.each(keysEvents, function(index, item){
        addEvent(input, item, function(evt){
            ok(true, evt.type + ' event trigger');
        });
    });
    $.each(keysEvents, function(index, item){
        baidu.query(input).trigger(item);
    });
    
    $.each(mousesEvents, function(index, item){
        addEvent(input, item, function(evt){
            ok(true, evt.type + ' event trigger');
        });
    });
    $.each(mousesEvents, function(index, item){
        baidu.query(input).trigger(item);
    });
    

    $.each(formsEvents, function(index, item){
        addEvent( item == "submit" || item == "reset" ? form : input, item, function(){
            ok(true, 'form event trigger');
        });
    });
    
    $.each(formsEvents, function(index, item){
        baidu.query( item == "submit" || item == "reset" ? form : input ).trigger( item );
    });
    
    $.each(htmlEvents, function(index, item){
        addEvent(document.body, item, function(){
            ok(true, 'html event trigger');
        });
    });
    
    $.each(htmlEvents, function(index, item){
        baidu.query(document.body).trigger(item);
    });
    
    $.each(etcEvents, function(index, item){
        addEvent(input, item, function(){
            ok(true, 'etc event trigger');
        });
    });
    
    $.each(etcEvents, function(index, item){
        baidu.query(input).trigger(item);
    });
    
    document.body.removeChild(input);
    document.body.removeChild(div);
});

test('trigger mouseenter, mouseleave, focusin, focusout', function(){
    expect(14);

    var div = document.createElement('div'),
        span = document.createElement('span'),
        input = document.createElement('input');
    document.body.appendChild(div);
    div.appendChild(span);
    span.appendChild(input);

    function handler(evt){
        ok(true, 'fire event: ' + evt.target.tagName + '-' + evt.type);
    }
    
    input.onfocus =
    input.onblur= function(evt){
        evt = evt || event;
        ok(true, 'fire elemenet event: ' + ( evt.target || evt.srcElement ).tagName + '-' + evt.type);
    };
    
    baidu.query(div).on('mouseenter', handler)
        .on('mouseleave', handler);
    baidu.query(div).on('focusin', handler)
        .on('focusout', handler);

    baidu.query(span).on('mouseover', handler)
        .on('mouseout', handler);

    baidu.query(input).on('focus', handler)
        .on('blur', handler);
    // trigger
    baidu.query(div).trigger('mouseenter')
        .trigger('mouseleave')
        .trigger('focusin')
        .trigger('focusout');

    baidu.query(span).trigger('mouseover')
        .trigger('mouseout');
    baidu.query(input).trigger('focus')
        .trigger('blur');

    document.body.removeChild(div);
});

//test('submit event', function(){
//    var form = document.createElement('form');
//    document.body.appendChild(form);
//    form.method = 'get';
//    form.action = 'http://www.baidu.com';
//    baidu.query(form).on('submit', function)
//    
//    document.body.removeChild(form)
//});

test("dom 为空",function(){
    var result = baidu("#baidujsxiaozu").on("wangxiao");
    ok(result);
    var result = baidu("#baidujsxiaozu").click("wangxiao");
    ok(result);
});

// TODO baidu.query(div).trigger(baidu.event());