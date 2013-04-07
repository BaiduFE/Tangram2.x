module("baidu.setBack");

//baidu.setBack(current, oldChain)

test("返回新链头时，可以通过getBack()取得老链头", function(){
    stop();
    ua.importsrc("baidu._query,baidu.string", function(){
       var q = baidu._query();
       var sb = baidu.setBack(baidu.string("mm"),q);

        ok(sb.getBack() === q, "取得老链头");

        start();
    })
});
