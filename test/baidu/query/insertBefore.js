module("baidu.query.insertBefore");

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

test("insertBefore selector", function(){
	document.body.appendChild(div);
	div.innerHTML = "<div class='A'></div><div class='A'></div><div class='B'></div><div class='B'></div>";
	baidu.query("div.A").insertBefore("div.B");
	equal( formatHTML(div.innerHTML), "<div class=a></div><div class=a></div><div class=b></div><div class=a></div><div class=a></div><div class=b></div>" );
});

test("insertBefore TangramDom", function(){
	div.innerHTML = "<div class='A'></div><div class='A'></div><div class='B'></div><div class='B'></div>";
	baidu.query("div.A").insertBefore( baidu.query("div.B") );
	equal( formatHTML(div.innerHTML), "<div class=a></div><div class=a></div><div class=b></div><div class=a></div><div class=a></div><div class=b></div>" );
});

test("insertBefore HTMLElement", function(){
	div.innerHTML = "<div class='A'></div><div class='A'></div><div class='B'></div><div class='B'></div>";
	baidu.query("div.A").insertBefore( baidu.query("div.B")[0] );
	equal( formatHTML(div.innerHTML), "<div class=a></div><div class=a></div><div class=b></div><div class=b></div>" );
});

test("insertBefore HTML", function(){
	div.innerHTML = "<div class='A'></div><div class='A'></div><div class='B'></div><div class='B'></div>";
	var a = baidu.query("div.A");
	a.insertBefore( "<div>C</div>" );
	ok( !! a[0], "a[0]" );
	equal(a[0].className, 'A', 'the first element is div');
	equal(a[1].className, 'A', 'the second element is div');
	equal(a[2].innerHTML, 'C', 'the third element is div');
});
