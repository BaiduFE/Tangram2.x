module('baidu.query.ready');

test("baidu.query(fn)", function(){
	expect(2);
	stop();
	baidu.query(function(){
	    ok( true, "baidu.query(fn)" );
	});
	baidu(function(){
	    ok( true, "baidu(fn)" );
	    start();	
	});
});

test('ready before onload', function() {
	expect(2);
	var f = document.createElement('iframe');
	document.body.appendChild(f);
	var flag = 0;
	stop();
	window.frameload = function(w) {
		w.baidu(function() {
			flag = 123;
			equals(flag,123, 'ready before onload');
			w.onload = function(){
				flag = 345;
				equals(flag,345, 'onload');
			    start();	
			}
		});
	};

	f.src = upath + 'readyFrame.php?f=baidu.query.ready';// 空页面
	stop();
	setTimeout(function(){
		$(f).remove();
		start();
	}, 1000);

});
