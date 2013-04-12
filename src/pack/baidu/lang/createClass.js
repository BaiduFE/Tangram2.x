///import baidu.createClass;
///import pack.baidu.lang.Class;


/**
 * @description 创建一个类，包括创造类的构造器、继承基类Class
 * @author meizz
 * @modify 2012.11.05 meizz
 * @name baidu.createClass
 * @function
 * @grammar baidu.createClass(constructor[, options])
 * @remark
            使用createClass能方便的创建一个带有继承关系的类。同时会为返回的类对象添加extend方法，使用obj.extend({});可以方便的扩展原型链上的方法和属性
 *             
 * @param {Function} constructor 类的构造器函数
 * @param {String}   type        [可选]类的名字
 * @param {Object}   options     [可选]配置{superClass: 父类, type:className: 类名, decontrolled: 不受控}
 * @return {Function}            类的最终构造器
 */
baidu.lang.createClass = baidu.createClass;
