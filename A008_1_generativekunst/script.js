"use strict";
var A008_1_generativekunst;
(function (A008_1_generativekunst) {
    /*
        Aufgabe: <Aufgabe 8.1 Generative Kunst>
        Name: <Alexander Holstein>
        Matrikel: <271466>
        Datum: <06.05.23>
        Quellen: Inverted classroom, Internetrecherche
        */
    let canvas = document.querySelector("canvas");
    let crc2 = canvas.getContext("2d");
    // das canvas wird den inneren fensterweiten bzw höhen zugeordnet
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // eine zufällige farbe wird kreirt
    function randomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
    //funktion welche eine dezimalzahl zwischen 0 und eins ausgibt
    function getRandomDecimal() {
        return parseFloat((Math.random()).toFixed(1));
    }
    // sphärischer gradient der den canvas im hintergrund überspannt
    let gradient = crc2.createRadialGradient(canvas.width / 2, canvas.height / 2, getRandomDecimal(), canvas.width / 2, canvas.height / 2, Math.min(canvas.width, canvas.height) / 2);
    gradient.addColorStop(getRandomDecimal(), randomColor());
    gradient.addColorStop(getRandomDecimal(), randomColor());
    gradient.addColorStop(getRandomDecimal(), randomColor());
    crc2.fillStyle = gradient;
    crc2.fillRect(0, 0, canvas.width, canvas.height);
    // zufälliger kreisemal loop
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 100;
        const color = randomColor();
        crc2.beginPath();
        crc2.arc(x, y, radius, 0, 2 * Math.PI);
        crc2.fillStyle = color;
        crc2.fill();
    }
    // Zufälliger linienmal loop
    for (let i = 0; i < 20; i++) {
        const x1 = Math.random() * canvas.width;
        const y1 = Math.random() * canvas.height;
        const x2 = Math.random() * canvas.width;
        const y2 = Math.random() * canvas.height;
        const color = randomColor();
        crc2.beginPath();
        crc2.moveTo(x1, y1);
        crc2.lineTo(x2, y2);
        crc2.lineWidth = 2;
        crc2.shadowBlur = 1;
        crc2.strokeStyle = color;
        crc2.stroke();
    }
})(A008_1_generativekunst || (A008_1_generativekunst = {}));
//# sourceMappingURL=script.js.map