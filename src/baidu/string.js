/*
 * @author bility
 * @email  xspider.org@gmail.com
 */

///import baidu.createChain;
///import baidu.forEach;
///import baidu.type;

/**
 * @description string对象链式语法的链头，操作字符串
 * @function 
 * @name baidu.string()
 * @grammar baidu.string(str)
 * @param {String} str 一个需要处理的字符串
 * @return {TangramString} 返回一个TangramString对象
 */

//Compatible not

/*
baidu.string = baidu.string || {};
*/

//Compatible start

//这里这样写是为了兼容之前的baidu.string()
//如果不兼容了就直接 baidu.string = baidu.string || {};
baidu.string = baidu.string || function(string){
    var 
        type = baidu.type(string),
        str  = new String(~'string|number'.indexOf(type) ? string : type),
        pro  = String.prototype,
        key;
    

    for(key in baidu.string){
        str[key] = baidu.string[key];
    };
    
    return str;
};
//Compatible end