module("baidu.query.getParent");

/**
 * parentNode跟parentElement除了前者是w3c标准，后者只ie支持，其他的区别就不是那么明显了。
 * 
 * 当父节点的nodeType不是1，即不是element节点的话，它的parentElement就会是null。
 * 这就明白了名字中“Element”的含义了。
 */
test("老接口：基础校验", function() {
//	equals(baidu.query.getParent(document.body), document);
	equals(baidu.query.getParent(document.body.firstChild), document.body);
	equals(baidu.query.getParent(document.createElement("div")), null);
	equals(baidu.query.getParent(document.body.appendChild(document
			.createTextNode("test"))), document.body);
});