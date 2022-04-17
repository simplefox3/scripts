// ==UserScript==
// @name         mip_baidu_killer.js
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  IP地址查询-站长查询 百度网盟广告自动删除
// @author       wuuconix
// @match        http://mip.chinaz.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @license MIT
// ==/UserScript==

(function() {
    'use strict'

    const observer = new MutationObserver(() => {
        let baiduFrame = document.querySelector("iframe")
        if (baiduFrame) { //发现百度网盟推广广告
            baiduFrame.parentElement.remove()
            console.log("百度网盟广告已经自动关闭")
            suicide()
        }
    });

    observer.observe(document.body, { childList: true, });

    const suicide = () => {
        observer.disconnect()
    }
})();
