// ==UserScript==
// @name        Cityline auto go (git)
// @namespace   Cityline auto go
// @match       https://shows.cityline.com/tc/*
// @match       https://priority.cityline.com/tc/*
// @icon        https://www.cityline.com/assets/img/citylinelogo.png
// @grant       none
// @version     1.1
// @author      -
// @description 2023/11/28 下午2:05:24
// @updateURL   https://github.com/wongtszchiu/mobile_script/raw/main/autogo.user.js
// ==/UserScript==

    goFacilitiesInterval = setInterval( ()=>{
        try{
            if(document.querySelector("#buyTicketBtn")){
                go();
                clearInterval(goFacilitiesInterval);
            }

        }catch(err){
            console.log(err)}
    },5);
