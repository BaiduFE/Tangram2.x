module("baidu.lang.Class");
(function() {
	/* 引入_inherits */
	var _inherits = function(subClass, superClass, className) {
		var key, proto, selfProps = subClass.prototype, clazz = new Function();

		clazz.prototype = superClass.prototype;
		proto = subClass.prototype = new clazz();
		for (key in selfProps) {
			proto[key] = selfProps[key];
		}
		subClass.prototype.constructor = subClass;
		subClass.superClass = superClass.prototype;

		// 类名标识，兼容Class的toString，基本没用
		if ("string" == typeof className) {
			proto._className = className;
		}
	};
	/*
	 * 定义一些继承与baidu.lang.Class的类
	 */
	baidu.lang.Class.prototype.owner = 'baidu';
	var Device = function() {
		baidu.lang.Class.call(this);
	};

	Device.prototype = new baidu.lang.Class();
	Device.prototype.constructor = Device;
	Device.prototype.dispose = function() {
		baidu.lang.Class.prototype.dispose.call(this);
	};

	var simpleDevice = function() {
		Device.call(this);
		this.tag = 'i am a simple device!';
	};
	_inherits(simpleDevice, Device);
	simpleDevice.prototype.dispose = function() {
		this.tag = null;
		baidu.lang.Class.prototype.dispose.call(this);

	};

	var Monitor = function(mbrand) {
		this.brand = mbrand;
		Device.call(this);
	};
	_inherits(Monitor, Device, 'Monitor_Class');
	Monitor.prototype.size = '22 inch';
	Monitor.prototype.dispose = function() {
		Device.prototype.dispose.call(this);
		this.brand = null;
		// BaseClass.prototype.dispose.call(this);
	};

	var MotherBoard = function(mproducer) {
		this.producer = mproducer;
		Device.call(this);
	};
	MotherBoard.prototype = {
		voltage : '5v',
		beep : true
	};
	_inherits(MotherBoard, Device, 'MotherBoard_Class');
	MotherBoard.prototype.dispose = function() {
		this.producer = null;
		Device.prototype.dispose.call(this);
	};

	var InputDevice = function(damount) {
		this.amount = damount;
		this.state = 'Work Fine';
		Device.call(this);
	};
	_inherits(InputDevice, Device, 'InputDevice_Class');
	InputDevice.prototype.dispose = function() {
		this.amount = null;
		this.state = null;
		Device.prototype.dispose.call(this);
	};

	var Computer = function(mbrand, monitorbrand, mproducer) {
		this.machineBrand = mbrand;
		this.inputPart = new InputDevice(2);
		this.monitor = new Monitor(monitorbrand);
		this.motherboard = new MotherBoard(mproducer);
		Device.call(this);
	};

	_inherits(Computer, Device, 'Computer_Class');
	Computer.prototype.dispose = function() {
		this.machineBrand = null;
		this.inputPart.dispose();
		this.inputPart = null;
		this.monitor.dispose();
		this.monitor = null;
		this.motherboard.dispose();
		this.motherboard = null;
		Device.prototype.dispose.call(this);
	};

	/*
	 * The following codes check the results with JSSpec framework
	 */
	var guidArray = []; // This array contains all the guids of all the
						// instances
	var arrayContain = function(array, ele) {
		i = 0;
		while (i < array.length) {
			if (array[i] == ele) {
				return true;
			}
			i = i + 1;
		}
		return false;
	}

	// Start test ...

	test("dispose", function() {
		expect(2);
		function myClass() {
			this.name = "myclass";
			this.method = function() {
				ok(false, "method is called");
			}
		}
		_inherits(myClass, baidu.lang.Class);
		// 通过继承baidu.lang.Class来获取dispose方法
			var obj = new myClass();
			obj.dispose();

			ok(obj.disposed, "disposed is set to true");
			equal(obj.name, undefined, "name is disposed");// name返回:undefined
			obj.method();

		});
	
	
	
	
	test("基类 调用与声明", function(){
        var Class = function(){
            baidu.base.Class.call(this);
            this.name = "mm";
        }
        var b = new Class()
    
        var a = new baidu.base.Class();
        a.show = function(){
            if (this.fire("onshow")) {
                this.showed = true;
            }
        };
        ok(true, '过程正确');
    });

    test('事件注册，派发和删除', function(){
        expect(2);
        var instance = new baidu.base.Class();
        instance.on('defaultEvent', function(evt){
            ok(evt.target === instance, 'fire event');
        });
        instance.fire('defaultEvent');
        instance.off('defaultEvent');
        instance.fire('defaultEvent');
        ok(baiduInstance(instance.guid) === instance, 'It is same instance');
        instance.dispose();
    });
    
    test('事件删除', function(){
        expect(6);
        var c = new baidu.base.Class(),
            handler = function(evt){
                ok(true, 'fire event: ' + evt.type);
            };
        ok(c.on('defaultEvent') === c, 'return instance');
        c.on('defaultEvent-1', handler);
        c.on('defaultEvent-2', handler);
        c.on('defaultEvent-3', handler);
        c.fire('defaultEvent-1');
        c.fire('defaultEvent-2');
        c.fire('defaultEvent-3');
        c.off('defaultEvent-1', handler);
        c.fire('defaultEvent-1');
        c.fire('defaultEvent-2');
        c.fire('defaultEvent-3');
        c.off();
        c.fire('defaultEvent-1');
        c.fire('defaultEvent-2');
        c.fire('defaultEvent-3');
    });
    
    test('调用一次的事件', function(){
        expect(2);
        var c = new baidu.base.Class();
        c.one('oneevent', function(){
            ok(true, 'fire default event');
        });
        c.fire('oneevent');
        c.fire('oneevent');
        c.once('onceevent', function(){
            ok(true, 'fire default event');
        });
        c.fire('onceevent');
        c.fire('onceevent');
    });
    
    test('析构', function(){
        var instance = new baidu.base.Class();
        instance.on('defaultEvent', function(){
            ok(false, 'fire event');
        });
        instance.dispose();
        instance.fire('defaultEvent');
        ok(true, 'instance dispose');
    });
    
    test("removeEventListener", function() {
        stop();
        ua.importsrc("baidu.lang.Event", function(){
            function myClass() {
                this.name = "myclass";
            }
    
            _inherits(myClass, baidu.lang.Class);// 通过继承baidu.lang.Class来获取它的dispatchEvent方法
               expect(2);
                var obj = new myClass();
                function listner(){ok(true, "listner is added");}
                
                var myEventWithoutOn = new (baidu.lang.Event)("onMyEvent", obj);
                obj.addEventListener("onMyEvent",listner,'pointMyEvent');
                obj.dispatchEvent(myEventWithoutOn);
                obj.removeEventListener("onMyEvent",'pointMyEvent');
                obj.dispatchEvent(myEventWithoutOn);
                ok(true,"listner is removed");
                start();
        }, "baidu.lang.Event", "baidu.lang.Class.$removeEventListener");
    });
    
    test("removeEventListener - no key", function() {
        function myClass() {
            this.name = "myclass";
        }
    
        _inherits(myClass, baidu.lang.Class);// 通过继承baidu.lang.Class来获取它的dispatchEvent方法
           expect(2);
            var obj = new myClass();
            function listner(){
                ok(true, "listner is added");
            }
            
            var myEventWithoutOn = new (baidu.lang.Event)("onMyEvent", obj);
            obj.addEventListener("onMyEvent", listner);
            obj.dispatchEvent(myEventWithoutOn);
            obj.removeEventListener("onMyEvent", listner);
            obj.dispatchEvent(myEventWithoutOn);
            ok(true, "listner is removed");
    
        });
    
    test("removeEventListener - no handler", function () {  // 2011-2-26, 无handler参数时移除所有事件
        function myClass() {
            this.name = "myclass";
        }
    
        _inherits(myClass, baidu.lang.Class);// 通过继承baidu.lang.Class来获取它的dispatchEvent方法
           expect(5);
            var obj = new myClass();
            function listner1(){ok(true, "listner1 is added");}
            function listner2(){ok(true, "listner2 is added");}
    
            var myEventWithoutOn = new baidu.lang.Event("onMyEvent", obj);
            obj.addEventListener("onMyEvent", listner1);
            obj.addEventListener("onMyEvent", listner2);
            obj.dispatchEvent(myEventWithoutOn);
            obj.removeEventListener("onMyEvent", function(){});
            obj.dispatchEvent(myEventWithoutOn);
            obj.removeEventListener("onMyEvent");
            obj.dispatchEvent(myEventWithoutOn);
            ok(true, "listner is removed");   
    });
    
    test("removeEventListener - default params", function () {
        function myClass() {
            this.name = "myclass";
        }
    
        _inherits(myClass, baidu.lang.Class);// 通过继承baidu.lang.Class来获取它的dispatchEvent方法
           expect(4);
            var obj = new myClass();
            function listner1(){ok(true, "listner1 is added");}
            function listner2(){ok(true, "listner2 is added");}
    
            var myEventWithoutOn = new baidu.lang.Event("onMyEvent", obj);
            var yourEventWithoutOn = new baidu.lang.Event("YourEvent", obj);
            obj.addEventListener("onMyEvent", listner1);
            obj.addEventListener("onMyEvent", listner2);
            obj.addEventListener("YourEvent", listner1);
            obj.dispatchEvent(myEventWithoutOn);
            obj.dispatchEvent(yourEventWithoutOn);  
            obj.removeEventListener("onMyEvent");
            obj.dispatchEvent(myEventWithoutOn);  
            obj.dispatchEvent(yourEventWithoutOn);  
            obj.removeEventListener();
            obj.dispatchEvent(myEventWithoutOn);  
            obj.dispatchEvent(yourEventWithoutOn);  
    });
	
})();