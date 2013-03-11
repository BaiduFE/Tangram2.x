///import baidu.id;
///import baidu.dom;
///import baidu.event._queue;

baidu.dom._cleanData = function(array){
    var tangId;
    for(var i = 0, ele; ele = array[i]; i++){
        tangId = baidu.id(ele, 'get');
        if(!tangId){continue;}
        baidu.event._queue.remove(ele);
        baidu.id(ele, 'remove');
    }
};