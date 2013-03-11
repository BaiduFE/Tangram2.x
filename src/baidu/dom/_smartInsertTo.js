/**
 * @author linlingyu
 */

///import baidu.dom;
///import baidu.type;
///import baidu.query.clone;
///import baidu.query.getDocument;
///import baidu.query.createElements;
///import baidu.dom._smartInsert;
///import baidu.query.contains;

baidu.dom._smartInsertTo = function(tang, target, callback, orie){
    var insert = baidu.query(target),
        first = insert[0],
        tangDom;
        
    if(orie && first && (!first.parentNode || first.parentNode.nodeType === 11)){
        orie = orie === 'before';
        tangDom = baidu.merge(orie ? tang : insert, !orie ? tang : insert);
        if(tang !== tangDom){
            tang.length = 0;
            baidu.merge(tang, tangDom);
        }
    }else{
        for(var i = 0, item; item = insert[i]; i++){
            baidu.dom._smartInsert(baidu.query(item), i > 0 ? tang.clone(true, true) : tang, callback);
        }
    }
};
