// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-02-10
// @description  try to take over the world!
// @author       You
// @match        *.talentlms.com/*
// @match        https://cdn.talentlms.com/engine/*/scorm_popupV2.html
// @match        https://cdn.talentlms.com/sc/*/engine/*/scorm_popupV2.html
// @match        https://cdn2.talentlms.com/sc/*/engine/*/scorm_popupV2.html
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==


const doShit = () => {
    document.body.onkeyup = keyEventHandler;

    const aa = document.querySelector("#slide");
    aa.onclick = clickEventHandler;

}

const clickEventHandler = (e) => {
    console.log('click event handled');
    const playpausebutton = document.querySelector("#play-pause");
    playpausebutton.click();
}

const keyEventHandler = (e) => {
    console.log('space event handled');

    const playpausebutton = document.querySelector("#play-pause");
    if (e.keyCode === 32) {
        playpausebutton.click();
    }
};

(function() {
    'use strict';
    console.log("it works!");
    setTimeout(doShit,3000);
})();
