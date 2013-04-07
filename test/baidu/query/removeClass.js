module('baidu.query.removeClss')


var getWord = function(html){ return html.replace(/<[^>]+>|\s/g, ""); };


//新接口测试
test('正常用例',function(){
	//expect(4);
	var div = document.createElement('div');
	document.body.appendChild(div);
	div.className = 'div_class1';
	equal(div.className,'div_class1','div className');
	
	baidu.query(div).removeClass('div_class1');//remove 1 class
	equal(div.className,'','div has no className');
	
	div.className = 'div_class1 div_class2 div_class3 div_class4';
	baidu.query(div).removeClass('div_class2 div_class3    ');//remove 2 classes
	equal(div.className,'div_class1 div_class4','remove 2 classes');
	
	baidu.query(div).removeClass('div_class1 div_class2 div_class3');
	equal(div.className,'div_class4','remove not existed classes');

	document.body.removeChild(div);
});

test('shortcut',function(){
	//expect(3);
	var div = document.createElement('div');
	document.body.appendChild(div);
	div.className = 'div_class1';
	baidu.query(div).removeClass('div_class1');//remove 1 class
	equal(div.className,'','div has no className--shortcut');
	
	div.className = 'div_class1 div_class2 div_class3 div_class4';
	baidu.query(div).removeClass('div_class2 div_class3    ');//remove 2 classes
	equal(div.className,'div_class1 div_class4','remove 2 classes--shortcut');
	
	baidu.query(div).removeClass('div_class1 div_class2 div_class3');
	equal(div.className,'div_class4','remove not existed classes--shortcut');
	
	document.body.removeChild(div);
});

test('异常用例', function(){
	//expect(3);
	var html = document.getElementsByTagName('html')[0];
	var head = document.getElementsByTagName('head')[0];
	html.className = "html_name";
	head.className = "head_name";
	baidu.query(html).removeClass("html_class1");//not existed class
	baidu.query(head).removeClass("head_name");
	equal(html.className,"html_name","html fails to removes classname");
	equal(head.className,"","head removes classname");
	
	baidu.query(html).removeClass('not_exited_class');
	equal(html.className,'html_name','remove not existed class of html');
});
