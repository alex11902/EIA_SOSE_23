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

        let div0: HTMLElement = <HTMLElement>document.querySelector("div0");
        let div1: HTMLElement = <HTMLElement>document.querySelector("div1");
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




    function setInfoBox(_event: MouseEvent): void {

        let span: HTMLSpanElement = <HTMLSpanElement>document.querySelector("span");
        console.log(span);
        let posX: number = _event.clientX;
        let posY: number = _event.clientY;

        span.innerHTML = " "+ posX+" "+posY;



    }







    function logInfo(_event: Event) {

        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);

    }



}