// ==UserScript==
// @name        Cityline auto click queue (git)
// @namespace   Cityline auto click queue
// @match       https://msg.cityline.com/*
// @icon        https://www.cityline.com/assets/img/citylinelogo.png
// @grant       none
// @version     1.4
// @author      -
// @description 2023/11/28 下午2:05:24
// @updateURL   https://github.com/wongtszchiu/mobile_script/raw/main/queue.user.js
// ==/UserScript==

let rootInterval = null;
rootInterval = setInterval( ()=>{

    document.querySelector("#btn-retry-en-1").click();

  },6000);
