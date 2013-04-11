module('baidu.query.remove');
function Elements(tagName, noInsert){
    var ele = this._ele = document.createElement(tagName || 'div');
    !noInsert && document.body.appendChild(ele);
}
Elements.prototype.get = function(){return this._ele;}
Elements.prototype.dispose = function(){
    var ele = this._ele;
    ele.parentNode && ele.parentNode.removeChild(ele);
    ele = this._ele = null;
}

function noParent(ele){
    return !ele.parentNode || ele.parentNode.nodeType === 11;
}

test('baidu.query(args).remove()', function(){
    var ele = new Elements('div'),
        span = new Elements('span', true);
    ele.get().appendChild(span.get());
    baidu.query(ele.get()).remove();
    baidu.query(span.get()).remove();
    ok(noParent(ele.get()), 'div removed');
    ok(noParent(span.get()), 'span removed');
    span.dispose();
    ele.dispose();
});

test('baidu.query(args).remove(selector)', function(){
    var container = new Elements('div'),
        span = new Elements('span', true),
        div_0 = new Elements('div', true),
        div_1 = new Elements('div', true),
        div_2 = new Elements('div', true);
    container.get().appendChild(div_0.get());
    container.get().appendChild(span.get());
    container.get().appendChild(div_1.get());
    container.get().appendChild(div_2.get());
    baidu.query(container.get().getElementsByTagName('*')).remove('div');
    
    ok(noParent(div_0.get()), 'div-0 removed');
    ok(noParent(div_1.get()), 'div-1 removed');
    ok(noParent(div_2.get()), 'div-2 removed');
    ok(!noParent(span.get()), 'span not removed');
    ok(!noParent(container.get()), 'container not removed');
});

test('event', function(){
    stop();
    ua.importsrc('baidu.query.on', function(){
        var div = document.createElement('div'),
            span = document.createElement('span'),
            key = baidu.key;

        div.appendChild(span);
        
        baidu.query(span).on('click', function(){
            ok(false, 'span event trigger');
        });
        baidu.query(div).on('mouseover', function(){
            ok(false, 'div event trigger');
        });
        ok(!!div[key], 'div has baidu.key');
        ok(!!span[key], 'span has baidu.key');
        
        baidu.query(div).remove();
        ua.fireMouseEvent(span, 'click');
        ua.fireMouseEvent(div, 'mouseover');

        ok(!div[key], 'div has not baidu.key');
        ok(!span[key], 'span has not baidu.key');

        start();
    }, 'baidu.query.on', 'baidu.query.remove');
});

test("dom为空的情况",function(){
    var result = baidu("#baidujsxiaozu").remove("wangxiao");
    ok(result);
});
//2.0已经加入了容错
//test('异常用例', function() {
//    expect(1);
//    var div = document.createElement('div');
//    div.id = 'remove_test_div';
//    // alert(div && div.nodeName && (div.nodeType == 1 || id.nodeType == 9))
//        try {
//            baidu.query.remove("remove_test_div");
//
//        } catch (e) {
//            ok(true, 'exception catched');
//        }
//    })