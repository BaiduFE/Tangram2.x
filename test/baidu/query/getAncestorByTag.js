module("baidu.query.getAncestorByTag")

test("老接口：Element or id",function(){
	expect(2);
	var div = document.createElement('div');
	var a = document.createElement('div');
	var div1 = document.createElement('div');
	var img = document.createElement('img');
	document.body.appendChild(div);
	div.appendChild(div1);
	div.appendChild(img);
	div1.appendChild(a);
	a.id = "a_id";
	equal(baidu.query.getAncestorByTag(a,'div'),div1,"get nearest ancestor by tag");
	equal(baidu.query.getAncestorByTag('a_id','div'),div1,"get by id"); 
	document.body.removeChild(div);
})


test("老接口：html or body", function() {
	expect(3);
	var div = document.createElement('div');
	document.body.appendChild(div);
	equal(baidu.query.getAncestorByTag(document.body,'html'),document.documentElement,'get html ancestor');
	equal(baidu.query.getAncestorByTag(div,'body'),document.body,'get body ancestor');
	equal(baidu.query.getAncestorByTag(div,'html'),document.documentElement,'get html ancestor of div');
	document.body.removeChild(div);
})


test("老接口：no ancestor",function(){
	
	var div = document.createElement('div');
	equal(baidu.query.getAncestorByTag(div,'body'),null,"no ancestor");
})

