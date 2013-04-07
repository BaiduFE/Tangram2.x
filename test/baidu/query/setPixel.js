module("baidu.query.setPixel");
test("兼容Magic接口：set pixel",function(){
	expect(2);
	var div = document.createElement('div');
	document.body.appendChild(div);
    $(div).css('left', '0').css('top', '0').css('height', '10px')
    .css('width', '10px').css('backgroundColor','red');
	baidu.query.setPixel(div,'width','20px');
	baidu.query.setPixel(div,'height','20');
	equals(div.style.width, "20px", "20px");
	equals(div.style.height, "20px", "20px");
	document.body.removeChild(div);
});
