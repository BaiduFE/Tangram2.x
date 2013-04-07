module("baidu.query.getCurrentStyle");


test("get style from style", function() {
	expect(7);
	var currStyle = document.documentElement.currentStyle;
	var div = document.createElement('div');
	var img = document.createElement('img');
	document.body.appendChild(div);
	div.appendChild(img);
	div.id = 'div_id';
	div.style['cssFloat'] = div.style['float'] = 'left';// opera下cssFloat生效
	div.style.width = '100px';
	div.style.height = '150px';
	div.style.background = "#FFCC80";
	div.style.color = "red";
	img.style.display = 'block';
	img.style.width = '10%';
	img.style.height = '10%';
	equal(baidu.query(div).getCurrentStyle( 'float'), 'left');
	equal(baidu.query(div).getCurrentStyle( 'width'), '100px');
	equal(baidu.query(div).getCurrentStyle( 'height'), '150px');
	var color = baidu.query(div).getCurrentStyle('color').toLowerCase();
	ok(color == '#ff0000' || color == 'red'
			|| (/rgb\(255,\s?0,\s?0\)/.test(color)), 'color red');

	var img = baidu.query(img);
	equal(img.getCurrentStyle('display'), 'block');

	equal(img.getCurrentStyle('width'), currStyle ? '10%' : '10px');
	equal(img.getCurrentStyle('height'), currStyle ? '10%' : '15px');

	document.body.removeChild(div);
});

/** css加载也需要时间 * */
test("get style from css file", function() {
	expect(9);
	stop();
	var div = document.createElement('div');
	var div1 = document.createElement('div');
	var img = document.createElement('img');
	var p = document.createElement('p');
	var link = document.createElement('link');
	document.body.appendChild(div);
	document.body.appendChild(div1);

	div.appendChild(p);
	div.appendChild(img);
	$(div).prop('className', "content");
	$(div1).prop('className', 'content');
	$(img).prop('className', 'content');
	$(p).prop('className', 'pid');

	ua.loadcss(upath + 'style.css', function() {
		/** IE的float属性叫styleFloat，firefox则是cssFloat * */
		var a = ua.browser.ie ? 'styleFloat' : 'float';
		var b = ua.browser.ie ? 'fontSize' : 'font-size';
		equal(baidu.query(div).getCurrentStyle(a), 'left');
		equal(baidu.query(div).getCurrentStyle('width'), '200px');
		var color = baidu.query(div).getCurrentStyle('color').toLowerCase();
		ok(color == '#00ff00' || color == 'rgb(0,255,0)'
				|| color == 'rgb(0, 255, 0)', 'color');
		equal(baidu.query(div).getCurrentStyle('position'), 'relative');
		/** IE的float属性叫styleFloat，firefox则是cssFloat */
		equal(baidu.query(img).getCurrentStyle(a), 'left');
		equal(baidu.query(img).getCurrentStyle('display'), 'block');
		equal(baidu.query(img).getCurrentStyle('left'), '50px');
		equal(baidu.query(img).getCurrentStyle('width'), '200px');
		equal(baidu.query(p).getCurrentStyle(b), '14px');

		document.body.removeChild(div);
		document.body.removeChild(div1);
		start();
	}, "pid", "font-size", "14px");
});

test("get style from fixer", function() {
	var div = document.createElement('div');
    document.body.appendChild(div);
    var img = document.createElement('img');
    div.appendChild(img);
    equal(baidu.query(img).getCurrentStyle('display'), $(img).css('display'));
    document.body.removeChild(div);
});

//老接口
test("get style from style", function() {
	expect(7);
	var currStyle = document.documentElement.currentStyle;
	var div = document.createElement('div');
	var img = document.createElement('img');
	document.body.appendChild(div);
	div.appendChild(img);
	div.id = 'div_id';
	div.style['cssFloat'] = div.style['float'] = 'left';// opera下cssFloat生效
	div.style.width = '100px';
	div.style.height = '150px';
	div.style.background = "#FFCC80";
	div.style.color = "red";
	img.style.display = 'block';
	img.style.width = '10%';
	img.style.height = '10%';
	equal(baidu.query.getCurrentStyle(div, 'float'), 'left');
	equal(baidu.query.getCurrentStyle(div, 'width'), '100px');
	equal(baidu.query.getCurrentStyle(div, 'height'), '150px');
	var color = baidu.query.getCurrentStyle(div, 'color').toLowerCase();
	ok(color == '#ff0000' || color == 'red'
			|| (/rgb\(255,\s?0,\s?0\)/.test(color)), 'color red');
	equal(baidu.query.getCurrentStyle(img, 'display'), 'block');
	equal(baidu.query.getCurrentStyle(img, 'width'), currStyle ? '10%' : '10px');
	equal(baidu.query.getCurrentStyle(img, 'height'), currStyle ? '10%' : '15px');

	document.body.removeChild(div);
});

/** css加载也需要时间 * */
test("get style from css file", function() {
	expect(9);
	stop();
	var div = document.createElement('div');
	var div1 = document.createElement('div');
	var img = document.createElement('img');
	var p = document.createElement('p');
	var link = document.createElement('link');
	document.body.appendChild(div);
	document.body.appendChild(div1);

	div.appendChild(p);
	div.appendChild(img);
	$(div).prop('className', "content");
	$(div1).prop('className', 'content');
	$(img).prop('className', 'content');
	$(p).prop('className', 'pid');
	ua.loadcss(upath + 'style.css', function() {
		/** IE的float属性叫styleFloat，firefox则是cssFloat * */
		var a = ua.browser.ie ? 'styleFloat' : 'float';
		var b = ua.browser.ie ? 'fontSize' : 'font-size';
		equal(baidu.query.getCurrentStyle(div, a), 'left');
		equal(baidu.query.getCurrentStyle(div, 'width'), '200px');
		var color = baidu.query.getCurrentStyle(div, 'color').toLowerCase();
		ok(color == '#00ff00' || color == 'rgb(0,255,0)'
				|| color == 'rgb(0, 255, 0)', 'color');
		equal(baidu.query.getCurrentStyle(div, 'position'), 'relative');
		/** IE的float属性叫styleFloat，firefox则是cssFloat */
		equal(baidu.query.getCurrentStyle(img, a), 'left');
		equal(baidu.query.getCurrentStyle(img, 'display'), 'block');
		equal(baidu.query.getCurrentStyle(img, 'left'), '50px');
		equal(baidu.query.getCurrentStyle(img, 'width'), '200px');
		equal(baidu.query.getCurrentStyle(p, b), '14px');

		document.body.removeChild(div);
		document.body.removeChild(div1);
		start();
	}, "pid", "font-size", "14px");
});

test("get style from fixer", function() {
	var div = document.createElement('div');
    document.body.appendChild(div);
    var img = document.createElement('img');
    div.appendChild(img);
    equal(baidu.query.getCurrentStyle(img, 'display'), $(img).css('display'));
    document.body.removeChild(div);
});
