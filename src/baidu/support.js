/**
 * @author linlingyu
 */
///import baidu.dom;
baidu.support = baidu.support || function(){
    var div = document.createElement('div'),
        baseSupport, a, input, select, opt;
    div.setAttribute('className', 't');
    div.innerHTML = ' <link/><table></table><a href="/a">a</a><input type="checkbox"/>';
    a = div.getElementsByTagName('A')[0];
    a.style.cssText = 'top:1px;float:left;opacity:.5';
    select = document.createElement('select');
    opt = select.appendChild(document.createElement('option'));
    input = div.getElementsByTagName('input')[0];
    input.checked = true;
    
    baseSupport = {
        dom: {
            div: div,
            a: a,
            select: select,
            opt: opt,
            input: input
        }
//        radioValue: only import by baidu.dom._attr
//        hrefNormalized: only import by baidu.dom._attr
//        style: only import by baidu.dom._attr
//        optDisabled: only import by baidu.query.val
//        checkOn: only import by baidu.query.val
//        noCloneEvent: only import by baidu.query.clone
//        noCloneChecked: only import by baidu.query.clone
//        cssFloat: only import baidu.query.styleFixer
//        htmlSerialize: only import baidu.query.html
//        leadingWhitespace: only import baidu.query.html
    };
    return baseSupport;
}();