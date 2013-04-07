module('baidu.query.setPosition');

test('老接口：基础用例', function() {
    stop();
    ua.importsrc('baidu.query.getStyle', function(){
        var div = document.createElement('div');
        document.body.appendChild(div);
        div.style.position = 'absolute';
        div.style.marginLeft = '200px';
        div.style.marginTop = '200px';
        baidu.query.setPosition(div, {
            top : 100,
            left : 100
        });
        equal(baidu.query.getStyle(div, "left"), '-100px', "应该减去margin-left的偏移");
        equal(baidu.query.getStyle(div, "top"), '-100px', "应该减去margin-top的偏移");
        start();
    }, 'baidu.query.getStyle', 'baidu.query.setPosition');
});
    
test('老接口：not set marginLeft value', function() {

    var div = document.createElement('div');

    document.body.appendChild(div);
    div.style.position = 'absolute';

    baidu.query.setPosition(div, {
        top : 100,
        left : 100
    });

    equal(baidu.query.getStyle(div, "left"), '100px', "应该减去margin-left的偏移");
    equal(baidu.query.getStyle(div, "top"), '100px', "应该减去margin-top的偏移");
});
