 // ==UserScript==
// @name         My Fancy New Userscript
// @namespace    http://your.homepage/
// @version      0.11
// @description  Script for solarmovie 
// @author       lilbro1062000
// @match        http://cinema.solarmovie.is/link/play/*
// @grant        none
// ==/UserScript==

var header =document.getelementsbyclassname('frameWrapper')[0];
console.log(header);
header.style.display='none';

var center = document.getElementsByClassName('thirdPartyEmbContainer')[0];

center.style.padding='0px';
center.style.marginLeft='-300px';

var foot = document.getElementById('footer');

foot.style.display = 'none';
