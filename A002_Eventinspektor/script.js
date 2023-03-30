"use strict";
/*
Aufgabe: Aufgabe 2 EventInspektor
Name: Alexander Holstein
Matrike: 271466
Datum: 30.03.2023
Quellen:
*/
var Eventinspector;
(function (Eventinspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let div0 = document.querySelector("div0");
        let div1 = document.querySelector("div1");
        //eventlistener auf cursorbewegung
        document.addEventListener("mousemove", setInfoBox);
        // eventlistener auf click
        document.addEventListener("click", logInfo);
        //und auf click nach oben
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        div0.addEventListener("click", logInfo);
        div0.addEventListener("keyup", logInfo);
        div1.addEventListener("click", logInfo);
        div1.addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        let span = document.querySelector("span");
        console.log(span);
        let posX = "" + _event.clientX + "";
        let posY = "" + _event.clientY + "";
        span.innerHTML = "posX: " + posX + " posY:" + posY + " Target:" + _event.target;
        let offsetX = _event.clientX + 20;
        let offsetY = _event.clientY + 20;
        span.style.left = offsetX + "px";
        span.style.top = offsetY + "px";
    }
    function customEvent(_event) {
        let button1 = document.querySelector("button");
        button1.addEventListener("click", logInfo);
    }
    function logInfo(_event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }
})(Eventinspector || (Eventinspector = {}));
//# sourceMappingURL=script.js.map