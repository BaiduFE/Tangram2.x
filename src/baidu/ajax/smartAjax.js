///import baidu.ajax;
///import baidu.type;
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