module("baidu.query.hasClass")

var getWord = function(html){ return html.replace(/<[^>]+>|\s/g, ""); };
var formatHTML = function(html){
	html = html.toUpperCase();
	html = html.replace(/[\r\n]/g, "").replace(/<([^>]+)>/g, function(s, a){
	    return "<" + a.replace(/['"]/g, "").toLowerCase() + ">";
	});
	return html;
};

//新接口测试
test("新接口测试",function(){

	//创建一个测试div
	var div = document.createElement('div');
	document.body.appendChild(div);

	//没有className的情况
	ok(!baidu.query(div).hasClass("class1"),"没有className的情况");

	//一个className情况
	div.className = "class1";
	ok(baidu.query(div).hasClass('class1'),"一个className情况，有");
	ok(!baidu.query(div).hasClass('class2'),"一个className情况，没有");

	//多个className情况
	div.className = "class1 class2";
	ok(baidu.query(div).hasClass('class1 class2'),"多个className情况，有");
	ok(!baidu.query(div).hasClass('class1 class2 class3'),"多个className情况，没有");
	ok(!baidu.query(div).hasClass('class1 class3'),"多个className情况，没有");

	//多个className乱序
	div.className = "class1 class2";
	ok(baidu.query(div).hasClass('class2 class1'),"多个className情况，有");
	ok(!baidu.query(div).hasClass('class2 class1 class3'),"多个className情况，没有");
	ok(!baidu.query(div).hasClass('class3 class2'),"多个className情况，没有");

	div.className = "class1 class2 class3";
	ok(baidu.query(div).hasClass('class2 class1 class3'),"多个className情况，有");
	ok(!baidu.query(div).hasClass('class2 class1 class3 class4'),"多个className情况，没有");
	ok(baidu.query(div).hasClass('class3 class2'),"多个className情况，没有");
	
	//异常处理：无参数 
	equal(div,baidu.query(div).hasClass()[0],"异常处理：无参数");

	document.body.removeChild(div);
});
