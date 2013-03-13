///import baidu.ajax;
///import baidu.type;

/**
 * @description 根据类型创建一个ajax方法(POST/GET...)
 * @function 
 * @name baidu.smartAjax()
 * @grammar baidu.smartAjax(type)
 * @param {String} type 请求类型(POST/GET...)
 * @return {tangramAjax} 一个tangramAjax方法
 */
baidu.ajax.smartAjax = baidu.ajax.smartAjax || function(method){
    return function(url, data, callback, type){
        if(baidu.type(data) === 'function'){
            type = type || callback;
            callback = data;
            data = undefined;
        }
        baidu.ajax({
            type: method,
            url: url,
            data: data,
            success: callback,
            dataType: type
        });
    };
};