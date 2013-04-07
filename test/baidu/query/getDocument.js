module("baidu.query.getDocument");

var getWord = function(html){ return html.replace(/<[^>]+>|\s/g, ""); };
var formatHTML = function(html){
	html = html.toUpperCase();
	html = html.replace(/[\r\n]/g, "").replace(/<([^>]+)>/g, function(s, a){
	    return "<" + a.replace(/['"]/g, "").toLowerCase() + ">";
	});
	return html;
};

// var div = document.createElement("div");
// 	div.style.position = "absolute";
// 	div.style.top = "-1000px";

// document.documentElement.appendChild(div);

test("正常用例", function(){
	expect(4);
	var div = document.createElement('div');
	var img = document.createElement('img');
	document.body.appendChild(div);
	div.appendChild(img);
	div.id = 'div_id';

	equal(baidu.query(div).getDocument(), document, "div get document");
	equal(baidu.query('#div_id').getDocument(), document, "div get document by id");
	equal(baidu.query(img).getDocument(), document, "img get document");
	equal(baidu.query(document).getDocument(), document, "document get document");
	
	document.body.removeChild(div);
});

test("iframe", function(){
	ua.frameExt(function(w){
		equals(w.baidu.query(w.parent.document.body).getDocument(), w.parent.document);
		equals(w.parent.baidu.query(w.document.body).getDocument(), w.document);
		this.finish();
	});
});

// 老接口

test("正常用例", function(){
	expect(4);
	var div = document.createElement('div');
	var img = document.createElement('img');
	document.body.appendChild(div);
	div.appendChild(img);
	div.id = 'div_id';
	equal(baidu.query.getDocument(div),document,"div get document");
	equal(baidu.query.getDocument('div_id'),document,"div get document by id");
	equal(baidu.query.getDocument(img),document,"img get document");
	equal(baidu.query.getDocument(document),document,"document get document");
	document.body.removeChild(div);
});

test("iframe", function(){
	ua.frameExt(function(w){
		var wd = w.baidu.query.getDocument,
			pwd = w.parent.baidu.query.getDocument;
		equals(wd(w.parent.document.body), w.parent.document);
		equals(pwd(w.document.body), w.document);
		this.finish();
	});
});


test("dom为空的情况",function(){
    var result = baidu("#baidujsxiaozu").getDocument("wangxiao");
    equal(result,undefined);
});
