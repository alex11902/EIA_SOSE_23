/*
Aufgabe: Aufgabe 2 EventInspektor
Name: Alexander Holstein
Matrike: 271466
Datum: 30.03.2023
Quellen:
*/
namespace Eventinspector {




    window.addEventListener("load", handleLoad);

    function handleLoad(): void {

        let div0: HTMLElement = <HTMLElement>document.querySelector("#div0");
        let div1: HTMLElement = <HTMLElement>document.querySelector("#div1");
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

        let button1: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button1");
        button1.addEventListener("customEvent", triggerEvent);
        button1.addEventListener("click", dispatchEvent);

    }



    function setInfoBox(_event: MouseEvent): void {

        let span: HTMLSpanElement = <HTMLSpanElement>document.querySelector("span");

        if (_event.target === span) {
            return;
        }



        let posX: string = "" + _event.clientX + "";
        let posY: string = "" + _event.clientY + "";
        span.innerHTML = "posX: " + posX + " posY:" + posY + " Target:" + _event.target;

        let offsetX: number = _event.clientX + 20;
        let offsetY: number = _event.clientY + 20;
        span.style.left = offsetX + "px";
        span.style.top = offsetY + "px";

    }

    function customEvent(): void {

        let button1: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");

        let newEvent: Event = new Event("customEvent");

        button1.dispatchEvent(newEvent);



    }

    function dispatchEvent(): void {

        customEvent();

    }

    function triggerEvent(_event: Event): void {


        console.log(_event, " button geklickt");


    }


    function logInfo(_event: Event) {

        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);

    }



}