// chrome下,'function' == typeof /a/ 为true.

module("baidu.lang.isFunction");

test("函数校验",function(){
	expect(3);
	var isFunction__obj = function() {
		}

	ok(baidu.lang.isFunction(isFunction__obj),"is function");
	ok(baidu.lang.isFunction(function() {}),"empty function is function");
	ok(baidu.lang.isFunction(baidu.lang.isFunction),"baidu.lang.isFunction is function");
})

test("类型覆盖校验",function(){
	// 空对象
		ok(!baidu.lang.isFunction(),"empty obj is not function");
		// 字符串
		ok(!baidu.lang.isFunction("test"),"string is not function");
		// 数字
		ok(!baidu.lang.isFunction(123),"number is not function");
		// 布尔
		ok(!baidu.lang.isFunction(true),"bool is not function");
		// 空
		ok(!baidu.lang.isFunction({}),"empty is not function");
		// 数组
		ok(!baidu.lang.isFunction([]),"array is not function");
		// undefine
		ok(!baidu.lang.isFunction(void(0)),"undefined is not function");
		// 快捷方式
       ok(baidu.lang.isFunction(baidu),"short cut is not function");
});