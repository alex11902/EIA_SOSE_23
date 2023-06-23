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
    // Basisklasse für generierte Objekte
    class GeneratedObject {
        x;
        y;
        color;
        speedX;
        speedY;
        constructor(x, y, color, speedX, speedY) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.speedX = speedX;
            this.speedY = speedY;
        }
        // Zeichenmethode, wird in den Unterklassen überschrieben
        draw() {
            // Implementierung abhängig vom konkreten Objekt
        }
        // Bewegungsmethode, wird in den Unterklassen überschrieben
        move() {
            // Implementierung abhängig vom konkreten Objekt
        }
    }
    // Klasse für generierte Kreise
    class GeneratedCircle extends GeneratedObject {
        radius;
        constructor(x, y, color, radius, speedX, speedY) {
            super(x, y, color, speedX, speedY);
            this.radius = radius;
        }
        draw() {
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();
        }
        move() {
            this.x += this.speedX;
            this.y += this.speedY;
        }
    }
    // Klasse für generierte Linien
    class GeneratedLine extends GeneratedObject {
        x1;
        y1;
        x2;
        y2;
        constructor(x1, y1, x2, y2, color, speedX, speedY) {
            super(x1, y1, color, speedX, speedY);
            this.x1 = x1;
            this.y1 = y1;
            this.x2 = x2;
            this.y2 = y2;
        }
        draw() {
            crc2.beginPath();
            crc2.moveTo(this.x1, this.y1);
            crc2.lineTo(this.x2, this.y2);
            crc2.lineWidth = 2;
            crc2.shadowBlur = 1;
            crc2.strokeStyle = this.color;
            crc2.stroke();
        }
        move() {
            this.x1 += this.speedX;
            this.y1 += this.speedY;
            this.x2 += this.speedX;
            this.y2 += this.speedY;
        }
    }
    // Klasse für generierte Paraglider
    class GeneratedParaglider extends GeneratedObject {
        width;
        height;
        constructor(x, y, color, width, height, speedX, speedY) {
            super(x, y, color, speedX, speedY);
            this.width = width;
            this.height = height;
        }
        draw() {
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + this.width, this.y + this.height / 2);
            crc2.lineTo(this.x, this.y + this.height);
            crc2.closePath();
            crc2.fillStyle = this.color;
            crc2.fill();
        }
        move() {
            this.x += this.speedX;
            this.y += this.speedY;
        }
    }
    let canvas = document.querySelector("canvas");
    let crc2 = canvas.getContext("2d");
    // das canvas wird den inneren Fensterweiten bzw. Höhen zugeordnet
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // eine zufällige Farbe wird kreiert
    function randomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
    // Funktion, die eine Dezimalzahl zwischen 0 und 1 ausgibt
    function getRandomDecimal() {
        return parseFloat((Math.random()).toFixed(1));
    }
    // sphärischer Gradient, der den Canvas im Hintergrund überspannt
    let gradient = crc2.createRadialGradient(canvas.width / 2, canvas.height / 2, getRandomDecimal(), canvas.width / 2, canvas.height / 2, Math.min(canvas.width, canvas.height) / 2);
    gradient.addColorStop(getRandomDecimal(), randomColor());
    gradient.addColorStop(getRandomDecimal(), randomColor());
    gradient.addColorStop(getRandomDecimal(), randomColor());
    crc2.fillStyle = gradient;
    crc2.fillRect(0, 0, canvas.width, canvas.height);
    // Array für generierte Objekte
    let generatedObjects = [];
    // Generierung der Objekte
    function generateObjects() {
        const numCircles = 100;
        const numLines = 20;
        const numParagliders = 5;
        for (let i = 0; i < numCircles; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const radius = Math.random() * 100;
            const color = randomColor();
            const speedX = (Math.random() - 0.5) * 2;
            const speedY = (Math.random() - 0.5) * 2;
            const circle = new GeneratedCircle(x, y, color, radius, speedX, speedY);
            generatedObjects.push(circle);
        }
        for (let i = 0; i < numLines; i++) {
            const x1 = Math.random() * canvas.width;
            const y1 = Math.random() * canvas.height;
            const x2 = Math.random() * canvas.width;
            const y2 = Math.random() * canvas.height;
            const color = randomColor();
            const speedX = (Math.random() - 0.5) * 2;
            const speedY = (Math.random() - 0.5) * 2;
            const line = new GeneratedLine(x1, y1, x2, y2, color, speedX, speedY);
            generatedObjects.push(line);
        }
        for (let i = 0; i < numParagliders; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const width = 50;
            const height = 100;
            const color = randomColor();
            const speedX = (Math.random() - 0.5) * 2;
            const speedY = (Math.random() - 0.5) * 2;
            const paraglider = new GeneratedParaglider(x, y, color, width, height, speedX, speedY);
            generatedObjects.push(paraglider);
        }
    }
    // Animation der generierten Objekte
    function animateObjects() {
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < generatedObjects.length; i++) {
            const object = generatedObjects[i];
            object.move();
            object.draw();
        }
        requestAnimationFrame(animateObjects);
    }
    generateObjects();
    animateObjects();
})(A008_1_generativekunst || (A008_1_generativekunst = {}));
//# sourceMappingURL=script.js.map