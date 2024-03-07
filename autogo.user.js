// ==UserScript==
// @name        Cityline auto go
// @namespace   Violentmonkey Scripts22
// @match       https://shows.cityline.com/tc/*
// @match       https://priority.cityline.com/tc/*
// @icon        https://www.cityline.com/assets/img/citylinelogo.png
// @grant       none
// @version     1.0
// @author      -
// @description 2023/11/28 下午2:05:24
// ==/UserScript==


    goFacilitiesInterval = setInterval( ()=>{
        try{
            if(document.querySelector("#buyTicketBtn")){
                document.querySelector("#buyTicketBtn").click();
                clearInterval(goFacilitiesInterval);
            }

        }catch(err){
            console.log(err)}
    },5);
