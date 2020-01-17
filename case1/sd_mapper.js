"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: 
   Date:   

*/

var thisTime = new Date();
var thisStr = thisTime.toLocaleString();
document.getElementById("timeStamp").innerHTML = thisStr;
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();
var mapNum = (thisMonth * 2 + thisHour) % 24;
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";
document.getElementById("planisphere").insertAdjacentHTML("afterBegin", imgStr);