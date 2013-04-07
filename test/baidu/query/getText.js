module('baidu.query.getText')

//新接口
/**
 * 仅考虑针对core方法进行元素遍历
 */
//应该考虑nodeType为4和8的情况！！！！
test('老接口：getText', function(){
	expect(2);
	var text = document.createTextNode("textNode");
	var text2 = document.createTextNode("textNode2");
	var div = document.createElement('div');
	document.body.appendChild(div);
	div.appendChild(text);
	div.appendChild(text2);
	equal(baidu.query(text2).getText(),"textNode2","get text from textNode");
	equal(baidu.query(div).getText(),"textNodetextNode2","div innerHTML is textNodetextNode2");
	document.body.removeChild(div);
})

/**
 * 
 */

test('老接口：dom or id', function(){
	expect(2);
	var div = document.createElement('div');
	document.body.appendChild(div);
	div.setAttribute('id',"id_div");
	div.innerHTML = "text of div";
	equal(baidu.query(div).getText(),"text of div","div text");//dom
	equal(baidu.query("#id_div").getText(),"text of div","div id test");//id
	document.body.removeChild(div);
})

/**
 * null or other parms
 * 
 */
test('老接口：null or other parms', function(){
	expect(2);
	var div;//非法节点
	try{
		baidu.query(div).getText();
	}catch(e){
		ok(true,"catch exception ok");
	}
	try{
		baidu.query().getText();//空参数
	}catch(e){
		ok(true,"catch exception ok");
	}
})

/**
 * 
 */
test('老接口：dom with none text', function(){
	expect(1);
	var p = document.createElement('p');
	equal(baidu.query(p).getText(),"","no text in p");
})

//确认一下哪些是特殊字符
test('老接口：special character',function(){
	expect(2);
	var a  = document.createElement('a');
	a.innerHTML = "百度一下"
	equal(baidu.query(a).getText(),"百度一下","text in Chinese");
	a.innerHTML = "^_'{}~@=?|/+-$%&*!<>\();:.,";
	equal(baidu.query(a).getText(),"^_'{}~@=?|/+-$%&*!<>\();:.,","get special characters");
})


//老接口
/**
 * 仅考虑针对core方法进行元素遍历
 */
//应该考虑nodeType为4和8的情况！！！！
test('老接口：getText', function(){
	expect(2);
	var text = document.createTextNode("textNode");
	var text2 = document.createTextNode("textNode2");
	var div = document.createElement('div');
	document.body.appendChild(div);
	div.appendChild(text);
	div.appendChild(text2);
	equal(baidu.query.getText(text2),"textNode2","get text from textNode");
	equal(baidu.query.getText(div),"textNodetextNode2","div innerHTML is textNodetextNode2");
	document.body.removeChild(div);
})

/**
 * 
 */

test('老接口：dom or id', function(){
	expect(2);
	var div = document.createElement('div');
	document.body.appendChild(div);
	div.setAttribute('id',"id_div");
	div.innerHTML = "text of div";
	equal(baidu.query.getText(div),"text of div","div text");//dom
	equal(baidu.query.getText("id_div"),"text of div","div id test");//id
	document.body.removeChild(div);
})

/**
 * null or other parms
 * 
 */
test('老接口：null or other parms', function(){
	expect(2);
	var div;//非法节点
	try{
		baidu.query.getText(div);
	}catch(e){
		ok(true,"catch exception ok");
	}
	try{
		baidu.query.getText();//空参数
	}catch(e){
		ok(true,"catch exception ok");
	}
})

/**
 * 
 */
test('老接口：dom with none text', function(){
	expect(1);
	var p = document.createElement('p');
	equal(baidu.query.getText(p),"","no text in p");
})

//确认一下哪些是特殊字符
test('老接口：special character',function(){
	expect(2);
	var a  = document.createElement('a');
	a.innerHTML = "百度一下"
	equal(baidu.query.getText(a),"百度一下","text in Chinese");
	a.innerHTML = "^_'{}~@=?|/+-$%&*!<>\();:.,";
	equal(baidu.query.getText(a),"^_'{}~@=?|/+-$%&*!<>\();:.,","get special characters");
})

