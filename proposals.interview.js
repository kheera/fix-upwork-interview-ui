// ==UserScript==
// @name         Fix upwork Accept Interview UI issue
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Fix upwork UI!
// @author       Shane Nelson
// @match        https://www.upwork.com/ab/proposals/interview/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setInterval(function(){
        var sliders = document.getElementsByTagName("up-c-slider");
        if(sliders.length > 0){
            setBoxShadowNone(sliders[0].shadowRoot, 'div.slider-static div.slider div.slider-content');
            setBoxShadowNone(sliders[0].shadowRoot, 'div.slider-static div.slider div.slider-content div.slider-header');
        }
    }, 1000);

    function setBoxShadowNone(document, querySelector){
            var element = document.querySelector(querySelector);
            element.style.boxShadow = 'none';
    }
})();
