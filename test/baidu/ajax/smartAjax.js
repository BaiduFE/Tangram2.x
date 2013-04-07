module("baidu.ajax.smartAjax");


test("baidu.ajax.smartAjax - success callbacks - get", function() {
    stop();
    
	(baidu.ajax.smartAjax('get'))(upath + "hello.php",function(text){
        equals(text, "Hello World!", "xhr return");
        start();
    });
});
test("baidu.ajax.smartAjax - success callbacks - post", function() {
    stop();
    
	(baidu.ajax.smartAjax('post'))(upath + "hello.php",function(text){
        equals(text, "Hello World!", "xhr return");
        start();
    });
});

