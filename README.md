
十恒路线排名榜单仅供参考，引用请注明来源。

关于API使用，请参考[NavLevel-vue](https://github.com/RollingSkyWiki/navlevel-vue)

# 使用
使用方法：确保您拥有滚动的天空Wiki账号，且在Special:参数设置中启用了“定制化分组排序”小工具。在您的`User:<username>/common.js`中添加：
```js
mw.loader.load('https://rs.miraheze.org/wiki/User:Zes_M_Young/tenable.js?oldid=59605&action=raw&ctype=text/javascript');
```

或者，将此仓库的`ten.js`文件复制到您的TamperMonkey脚本中。下面给出一个文件头配置，供参考：
```
// ==UserScript==
// @name         Tenable
// @namespace    http://rs.miraheze.org/wiki/User:Zes_M_Young
// @version      2025-12-16
// @description  try to take over the world!
// @author       Zes M Young
// @match        https://rs.miraheze.org/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

// 下面放置ten.js文件的内容
```
