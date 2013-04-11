module("baidu.query.empty");

var getWord = function(html){ return html.replace(/<[^>]+>|\s/g, ""); };
var formatHTML = function(html){
	html = html.toUpperCase();
	html = html.replace(/[\r\n]/g, "").replace(/<([^>]+)>/g, function(s, a){
	    return "<" + a.replace(/['"]/g, "").toLowerCase() + ">";
	});
	return html;
};
// TODO: 

test('当前页元素window', function() {
	expect(5);
	var div = document.createElement('div');
	document.body.appendChild(div);
	div.id = 'div_id';
	equal(baidu.query(div).getWindow(), window);
	equal(baidu.query(document).getWindow(), window);// document
	equal(baidu.query(document.body).getWindow(), window);// body
	equal(baidu.query(document.documentElement).getWindow(), window);
	equal(baidu.query('#div_id').getWindow(), window);

	document.body.removeChild(div);
});

test('iframe', function() {
	ua.frameExt(function(w){
		var gw = function(c){return w.parent.baidu.query(c).getWindow();}

		w.$(w.document.body).append('<div id="test_div"></div>');

		equals(gw(w.$('div#test_div')[0]), w);
		equals(gw(w.document), w);
		equals(w.baidu.query(w.parent.document).getWindow(), w.parent);
		this.finish();
	});
});


test("dom为空的情况",function(){
    var result = baidu("#baidujsxiaozu").getWindow("wangxiao");
    equal(result,undefined);
});