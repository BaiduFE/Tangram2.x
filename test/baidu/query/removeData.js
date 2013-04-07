module("baidu.query.removeData");
test("第一个参数为 String ", function () {

    stop();
    ua.importsrc("baidu.query.data", function(){

        var guid = baidu.key
            , $dom = baidu.query(document.body)
            , maps = baidu.global("_maps_HTMLElementData");

        $dom.data("key", "value");
        equal($dom.data("key"), maps[document.body[guid]].key, "赋值");

        $dom.removeData("key");
        equal($dom.data("key"), undefined, "removeData");

        equal(maps[document.body[guid]].key, undefined, "removeData");

    start();
    }, "baidu.query.data", "baidu.query.removeData");

});

test('第一个参数为 array', function(){
    var div = document.createElement('div'),
        array = ['key0', 'key1', 'key2'];
    document.body.appendChild(div);
    $.each(array, function(index, item){
        baidu.query(div).data(item, item + '-value');
        ok(baidu.query(div).data(item) === item + '-value', 'set value: ' + item + '-value');
    });
    baidu.query(div).removeData(array);
    $.each(array, function(index, item){
        ok(!baidu.query(div).data(item), item + ' is remove');
    });
    document.body.removeChild(div);
});