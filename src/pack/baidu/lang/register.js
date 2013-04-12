///import baidu.base.register;
///import pack.baidu.lang;

/**
 * @description 向某个类注册插件
 * author meizz, dron
 * create 2011/11/29
 * @name baidu.base.register
 * @function
 * @grammar baidu.base.register(Class, constructorHook[, methods])
 * @param   {Class}     Class           接受注册的载体 类
 * @param   {Function}  constructorHook 运行在载体类构造器里钩子函数
 * @param    {Object}  methods   [可选]挂载到载体类原型链上的方法集，可选
 * @meta standard
 *             
 */
baidu.lang.register = baidu.base.register;