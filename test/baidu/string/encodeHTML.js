module("baidu.string.encodeHTML测试");

/*
//2.x接口测试中被删除--by han_qiang
//加载快捷方式
test('prepareTest',function(){
	expect(1);
	stop();

	//加载快捷方式
	ua.importsrc("baidu.short", function(){
		start();
		ok(true,'ok');
	}, "baidu.trim", "baidu.string.encodeHTML");
});
*/
//新接口
test('将字符<>"&转成实体字符', function(){
	var strEncodeHTML="";
	
	strEncodeHTML = baidu.string('<>"&').encodeHTML();
	equals(strEncodeHTML, "&lt;&gt;&quot;&amp;");
	
	strEncodeHTML = baidu.string('<input type="text" value="data"/>').encodeHTML();
	equals(strEncodeHTML, "&lt;input type=&quot;text&quot; value=&quot;data&quot;/&gt;");
	
	strEncodeHTML = baidu.string('&amp;&<<<>>').encodeHTML();
	equals(strEncodeHTML, "&amp;amp;&amp;&lt;&lt;&lt;&gt;&gt;");
	
});
