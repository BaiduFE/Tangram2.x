module("baidu.String.subByte测试");

//新接口

test('中间有\n', function() {
	basestr = "\n\n编辑游记前序您可以在这里记录下行前的准备，"
			+ "或是旅行总体感受，\n亦或是任何写在行程前的话编辑游记前序您可以在这里记录下行前的准备，"
			+ "或是旅行总体感受，亦或是任何写在行程前的话编辑游记前序您可以在这里记录下行前的准备，"
			+ "或是旅行总体感受，亦或是任何写在行程前的话编辑游记前序您可以在这里记录下行前的准备，"
			+ "或是旅行总体感受，亦或是任何写在行程前的话编辑游记前序您可以在这里记录下行前的准备，"
			+ "或是旅行总体感受，亦或是任何写在行程前的话编辑游记前序您可以在这里记录下行前的准备，"
			+ "或是旅行总体感受，亦或是任何写在行程前的话编辑游记前序您可以在这里记录下行前的准备，"
			+ "或是旅行总体感受，亦或是任何写在行程前的话 ";

	equals(baidu.string(basestr).subByte(100, '...'),
			"\n\n编辑游记前序您可以在这里记录下行前的准备，或是旅行总体感受，\n亦或是任何写在行程前的话编辑游记前序...");
})

test("输入英文字符串", function() {
	basestr = "english string for test";

	equals(baidu.string(basestr).subByte(0), "");
	equals(baidu.string(basestr).subByte(1), "e");
	equals(baidu.string(basestr).subByte(5), "engli");
	equals(baidu.string(basestr).subByte(23), "english string for test");
	equals(baidu.string(basestr).subByte(25), "english string for test"); // 超过 length
	equals(baidu.string(basestr).subByte(-1), "english string for test"); // 负数
}); // 1

test("输入中文字符串", function() {
	basestr = "百度字符串测试";

	equals(baidu.string(basestr).subByte(0), "");
	equals(baidu.string(basestr).subByte(1), "");
	equals(baidu.string(basestr).subByte(6), "百度字");
	equals(baidu.string(basestr).subByte(7), "百度字");
	equals(baidu.string(basestr).subByte(14), "百度字符串测试");
	equals(baidu.string(basestr).subByte(15), "百度字符串测试");
	equals(baidu.string(basestr).subByte(30), "百度字符串测试");
	equals(baidu.string(basestr).subByte(-10), "百度字符串测试");
}); // 2

test("输入中英文混合字符串", function() {
	basestr = "百度China";

	equals(baidu.string(basestr).subByte(0), "");
	equals(baidu.string(basestr).subByte(1), "");
	equals(baidu.string(basestr).subByte(4), "百度");
	equals(baidu.string(basestr).subByte(5), "百度C");
	equals(baidu.string(basestr).subByte(3), "百");
	equals(baidu.string(basestr).subByte(9), "百度China");
	equals(baidu.string(basestr).subByte(12), "百度China");

	basestr = "bai百 du度";
	equals(baidu.string(basestr).subByte(0), "");
	equals(baidu.string(basestr).subByte(2), "ba");
	equals(baidu.string(basestr).subByte(4), "bai");
	equals(baidu.string(basestr).subByte(9), "bai百 du");
	equals(baidu.string(basestr).subByte(10), "bai百 du度");
	equals(baidu.string(basestr).subByte(-3), "bai百 du度");
}); // 3

test("输入字符串包括了全角字符，空格和转义字符等特殊字符", function() {
	basestr = "百 \(度\)ｃｈｉｎａ\.";

	equals(baidu.string(basestr).subByte(0), "");
	equals(baidu.string(basestr).subByte(1), "");
	equals(baidu.string(basestr).subByte(3), "百 ");
	equals(baidu.string(basestr).subByte(4), "百 \(");
	equals(baidu.string(basestr).subByte(5), "百 \(");
	equals(baidu.string(basestr).subByte(8), "百 \(度\)"); // 差一个字符
	equals(baidu.string(basestr).subByte(9), "百 \(度\)ｃ"); // 正好相等
	equals(baidu.string(basestr).subByte(10), "百 \(度\)ｃ");// 差一个字符（比前ｃ又多一个字符）
	equals(baidu.string(basestr).subByte(11), "百 \(度\)ｃｈ");
	equals(baidu.string(basestr).subByte(18), "百 \(度\)ｃｈｉｎａ\.");
	equals(baidu.string(basestr).subByte(22), "百 \(度\)ｃｈｉｎａ\.");
}); // 4

test("异常case", function() {
	var nullstr = null;
	var undefstr;
   
    
    
	equals(baidu.string(nullstr).subByte(2), "nu");
	equals(baidu.string(undefstr).subByte(5), "undef"); // undefined is 9 characters
});

test("尾部追加字符串功能", function() {
	var str1 = "appending";
	equals(baidu.string(str1).subByte(6, '...'), "append...");
	equals(baidu.string(str1).subByte(100, '...'), "appending"); // undefined is 9 characters
});

//老接口
test('中间有\n', function() {
	basestr = "\n\n编辑游记前序您可以在这里记录下行前的准备，"
			+ "或是旅行总体感受，\n亦或是任何写在行程前的话编辑游记前序您可以在这里记录下行前的准备，"
			+ "或是旅行总体感受，亦或是任何写在行程前的话编辑游记前序您可以在这里记录下行前的准备，"
			+ "或是旅行总体感受，亦或是任何写在行程前的话编辑游记前序您可以在这里记录下行前的准备，"
			+ "或是旅行总体感受，亦或是任何写在行程前的话编辑游记前序您可以在这里记录下行前的准备，"
			+ "或是旅行总体感受，亦或是任何写在行程前的话编辑游记前序您可以在这里记录下行前的准备，"
			+ "或是旅行总体感受，亦或是任何写在行程前的话编辑游记前序您可以在这里记录下行前的准备，"
			+ "或是旅行总体感受，亦或是任何写在行程前的话 ";

	equals(baidu.string.subByte(basestr, 100, '...'),
			"\n\n编辑游记前序您可以在这里记录下行前的准备，或是旅行总体感受，\n亦或是任何写在行程前的话编辑游记前序...");
})

test("输入英文字符串", function() {
	basestr = "english string for test";

	equals(baidu.string.subByte(basestr, 0), "");
	equals(baidu.string.subByte(basestr, 1), "e");
	equals(baidu.string.subByte(basestr, 5), "engli");
	equals(baidu.string.subByte(basestr, 23), "english string for test");
	equals(baidu.string.subByte(basestr, 25), "english string for test"); // 超过 length
	equals(baidu.string.subByte(basestr, -1), "english string for test"); // 负数
}); // 1

test("输入中文字符串", function() {
	basestr = "百度字符串测试";

	equals(baidu.string.subByte(basestr, 0), "");
	equals(baidu.string.subByte(basestr, 1), "");
	equals(baidu.string.subByte(basestr, 6), "百度字");
	equals(baidu.string.subByte(basestr, 7), "百度字");
	equals(baidu.string.subByte(basestr, 14), "百度字符串测试");
	equals(baidu.string.subByte(basestr, 15), "百度字符串测试");
	equals(baidu.string.subByte(basestr, 30), "百度字符串测试");
	equals(baidu.string.subByte(basestr, -10), "百度字符串测试");
}); // 2

test("输入中英文混合字符串", function() {
	basestr = "百度China";

	equals(baidu.string.subByte(basestr, 0), "");
	equals(baidu.string.subByte(basestr, 1), "");
	equals(baidu.string.subByte(basestr, 4), "百度");
	equals(baidu.string.subByte(basestr, 5), "百度C");
	equals(baidu.string.subByte(basestr, 3), "百");
	equals(baidu.string.subByte(basestr, 9), "百度China");
	equals(baidu.string.subByte(basestr, 12), "百度China");

	basestr = "bai百 du度";
	equals(baidu.string.subByte(basestr, 0), "");
	equals(baidu.string.subByte(basestr, 2), "ba");
	equals(baidu.string.subByte(basestr, 4), "bai");
	equals(baidu.string.subByte(basestr, 9), "bai百 du");
	equals(baidu.string.subByte(basestr, 10), "bai百 du度");
	equals(baidu.string.subByte(basestr, -3), "bai百 du度");
}); // 3

test("输入字符串包括了全角字符，空格和转义字符等特殊字符", function() {
	basestr = "百 \(度\)ｃｈｉｎａ\.";

	equals(baidu.string.subByte(basestr, 0), "");
	equals(baidu.string.subByte(basestr, 1), "");
	equals(baidu.string.subByte(basestr, 3), "百 ");
	equals(baidu.string.subByte(basestr, 4), "百 \(");
	equals(baidu.string.subByte(basestr, 5), "百 \(");
	equals(baidu.string.subByte(basestr, 8), "百 \(度\)"); // 差一个字符
	equals(baidu.string.subByte(basestr, 9), "百 \(度\)ｃ"); // 正好相等
	equals(baidu.string.subByte(basestr, 10), "百 \(度\)ｃ");// 差一个字符（比前ｃ又多一个字符）
	equals(baidu.string.subByte(basestr, 11), "百 \(度\)ｃｈ");
	equals(baidu.string.subByte(basestr, 18), "百 \(度\)ｃｈｉｎａ\.");
	equals(baidu.string.subByte(basestr, 22), "百 \(度\)ｃｈｉｎａ\.");
}); // 4

test("异常case", function() {
	var nullstr = null;
	var undefstr;
	equals(baidu.string.subByte(nullstr, 2), "nu");
	equals(baidu.string.subByte(undefstr, 5), "undef"); // undefined is 9 characters
});

test("尾部追加字符串功能", function() {
	var str1 = "appending";
	equals(baidu.string.subByte(str1, 6, '...'), "append...");
	equals(baidu.string.subByte(str1, 100, '...'), "appending"); // undefined is 9 characters
});
