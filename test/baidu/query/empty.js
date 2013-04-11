module("baidu.query.empty");

var getWord = function(html){ return html.replace(/<[^>]+>|\s/g, ""); };
var formatHTML = function(html){
	html = html.toUpperCase();
	html = html.replace(/[\r\n]/g, "").replace(/<([^>]+)>/g, function(s, a){
	    return "<" + a.replace(/['"]/g, "").toLowerCase() + ">";
	});
	return html;
};

var div = document.createElement("div");
	div.style.position = "absolute";
	div.style.top = "-1000px";


test("empty div", function(){
	document.body.appendChild(div);
    div.innerHTML = "<div class='A'>hello<div class='A'>world</div></div>";

    var a = baidu.query("div.A");

    a.empty();

    equal( a[0].innerHTML, "", "a[0].innerHTML" );
    equal( a[1].innerHTML, "", "a[1].innerHTML" );

    var b = baidu.query("div.A");

    equal( b.length, 1, "div.A length" );
});

test("dom为空的情况",function(){
    var result = baidu("#baidujsxiaozu").empty("wangxiao");
    ok(result);
});