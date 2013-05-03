///import baidu;
/**
 * @description number对象链式语法的链头
 * @name baidu.number()
 * @function
 * @grammar baidu.number(number)
 * @param   {Number} number Number对象.
 * @return  {TangramNumber}   返回Number对象，该对象被注入链式方法。.
 */

baidu.number = baidu.number || function(number) {
    var nan = parseFloat(number),
        val = isNaN(nan) ? nan : number,
        clazz = typeof val === 'number' ? Number : String,
        prot = baidu.number;
    val = new clazz(val);
    val._type_ = '$Number';
    for (var key in prot) {
        val[key] = prot[key];
    }
    return val;
};
