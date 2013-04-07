module("baidu.string.trim测试");
//加载快捷方式
/*
//2.x接口测试中被删除--by han_qiang
test('prepareTest',function(){
	expect(1);
	stop();

	//加载快捷方式
	ua.importsrc("baidu.short", function(){
		start();
		ok(true,'ok');
	}, "baidu.string.trim", "baidu.string.trim");
});
*/
test("删除字符串两边的空格", function(){
	var sStr = "     半角空格tab键	 ";
	equals(baidu.string(sStr).trim(), "半角空格tab键");
	
	//快捷方式
	sStr = "　　全角空格回车　\n";
	equals(baidu.string.trim(sStr), "全角空格回车");
	
	//全角与空格
	sStr = "　　	  ";
	equals(baidu.string(sStr).trim(), ""); //空
});
