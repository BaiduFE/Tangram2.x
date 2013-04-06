///import baidu.query;

baidu.dom = baidu.dom || function(q, c) { return baidu.query ? baidu.query(q, c) : null; };
baidu.dom.extend = baidu.query.extend;