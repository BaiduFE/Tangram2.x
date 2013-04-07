module("baidu.query.append");

var getWord = function(html){ return html.replace(/<[^>]+>|\s/g, ""); };
function wrap(val){return val.replace(/[\s\r\n]+/g, '');}

var div = document.createElement("div");
	div.style.position = "absolute";
	div.style.top = "-10000px";


var html = "<ul class='M'><li>X</li><li>Y</li><li>Z</li></ul><ul class='N'><li>A</li><li>B</li><li>C</li></ul>";

test("append Dom", function(){
  document.body.appendChild(div);
	div.innerHTML = html;
	baidu.query("ul.M").append( baidu.query("ul.N li")[1] );
	equal( getWord(div.innerHTML), "XYZBAC", "UL append Dom" );

	div.innerHTML = html;
	baidu.query("ul").append(baidu.query("ul.N li")[1]);
	equal( getWord(div.innerHTML), "XYZBACB", "ULs append Dom" );
});



test("append HTML", function(){
    div.innerHTML = html;
    baidu.query("ul").append( "<li>ALL</li>" );
   	equal( getWord(div.innerHTML), "XYZALLABCALL", "ULs append HTML" );

   	div.innerHTML = "<table></table>";
   	baidu.query("table").append("<tr><td>123</td></tr>");
   	
   	equal(wrap(div.getElementsByTagName('table')[0].tBodies[0].innerHTML.toLowerCase()), '<tr><td>123</td></tr>', "table append tr");

   	div.innerHTML = "<ul></ul>";
   	baidu.query("ul").append("<li>123</li>");
   	equal( wrap(div.innerHTML.toLowerCase()), "<ul><li>123</li></ul>", "ul append li" );
//
   	div.innerHTML = "<ul></ul>";
   	baidu.query("ul").append("<li>123</li><li>456</li>");
   	equal( wrap(div.innerHTML.toLowerCase()), "<ul><li>123</li><li>456</li></ul>", "ul append li" );
});

test("append TangramDom", function(){
    div.innerHTML = html;
    baidu.query("ul.M").append( baidu.query( baidu.query("ul.N li")[1] ) );
   	equal( getWord(div.innerHTML), "XYZBAC", "ULs append TangramDom" );
});

test("append Function", function(){
    div.innerHTML = "<div class='M'></div><div class='N'></div>";

    baidu.query("div", div).append(function(index, html){
        if(index == 0){
            equal( baidu.query(this).get(0).className, "M", "div.M className");
            return "<span>A</span><span>B</span>";
        }else if(index == 1){
        	equal( baidu.query(this).get(0).className, "N", "div.N className");
            return "<span>C</span><span>D</span>";
        }
    });
    equal( getWord(div.innerHTML), "ABCD", "div append HTML" );
});

test("append Array", function(){
    div.innerHTML = "<div class='M'>D</div>";

    baidu.query("div.M", div).append([
    	document.createTextNode("A"),
    	document.createTextNode("B"),
    	document.createTextNode("C")
    ]);

   	equal( getWord(div.innerHTML), "DABC", "div append TextNode Array" );
});

test('append Script', function(){
    div.innerHTML ='<div class="M"></div>';
    baidu.query('div.M', div).append('<script type="text/javascript">window.tangramId = 100;<\/script>');
    equal(tangramId, 100, 'script appendTo div and execution');
    equal(div.firstChild.firstChild.tagName.toLowerCase(), 'script', 'script tag appendTo div');
});

test("dom为空的情况",function(){
    var result = baidu("#baidujsxiaozu").append("wangxiao");
    ok(result);
});