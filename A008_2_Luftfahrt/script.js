"use strict";
/*
      Aufgabe: <Aufgabe 8.2 Luftfahrt>
      Name: <Alexander Holstein>
      Matrikel: <271466>
      Datum: <06.05.23>
      Quellen: Inverted classroom, Internetrecherche
      */
// Canvas erstellen
var A008_2_Luftfahrt;
(function (A008_2_Luftfahrt) {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
    // Canvas erstellen
    // interface Vektor {
    //     x: number;
    //     y: number;
    // };
    window.addEventListener("load", handleLoad);
    let crc2;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        crc2 = canvas.getContext("2d");
        drawBackground();
        drawSun();
        drawClouds();
        drawMountain();
    }
    // Hintergrund zeichnen
    function drawBackground() {
        // Farbe und Höhe der Berge
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.5, "white");
        gradient.addColorStop(1, "#35682d");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.closePath();
        // Farbe und Höhe der Berge
        const mountainColor = "#a9a9a9";
        const mountainHeight = canvasHeight / 4; // 1/4 der Höhe
        // Anzahl der Berge
        const numMountains = 3;
        for (let i = 0; i < numMountains; i++) {
            // Zufällige Position und Breite des Berges
            const mountainX = Math.random() * canvasWidth;
            const mountainWidth = Math.random() * (canvasWidth / 4) + canvasWidth / 8;
            // Zeichnen des Berges
            crc2.beginPath();
            crc2.moveTo(mountainX, (3 * canvasHeight) / 4); // 3/4 der Höhe
            crc2.lineTo(mountainX + mountainWidth / 2, (3 * canvasHeight) / 4 - mountainHeight);
            crc2.lineTo(mountainX + mountainWidth, (3 * canvasHeight) / 4);
            crc2.closePath();
            crc2.fillStyle = mountainColor;
            crc2.fill();
        }
    }
    ;
    // Hintergrund-Berge zeichnen
    crc2.fillStyle = "gray";
    crc2.beginPath();
    crc2.moveTo(canvasWidth * 0.1, canvasHeight);
    crc2.lineTo(canvasWidth * 0.5, canvasHeight * 0.4);
    crc2.lineTo(canvasWidth * 0.9, canvasHeight);
    crc2.closePath();
    crc2.fill();
    // Vordergrund-Bäume zeichnen
    crc2.fillStyle = "darkgreen";
    const treeSize = 30;
    const treePositions = [
        { x: canvasWidth * 0.15, y: canvasHeight * 0.9 },
        { x: canvasWidth * 0.25, y: canvasHeight * 0.8 },
        { x: canvasWidth * 0.35, y: canvasHeight * 0.9 },
        { x: canvasWidth * 0.45, y: canvasHeight * 0.85 },
        { x: canvasWidth * 0.55, y: canvasHeight * 0.95 },
        { x: canvasWidth * 0.65, y: canvasHeight * 0.9 },
        { x: canvasWidth * 0.75, y: canvasHeight * 0.85 },
        { x: canvasWidth * 0.85, y: canvasHeight * 0.9 },
    ];
    treePositions.forEach((position) => {
        crc2.fillRect(position.x - treeSize / 2, position.y - treeSize, treeSize, treeSize);
    });
    // Elliptischen Landeplatz zeichnen
    const landingPadWidth = 150;
    const landingPadHeight = 100;
    const landingPadX = canvasWidth / 2 - landingPadWidth / 2;
    const landingPadY = canvasHeight * 0.75 - landingPadHeight / 2;
    crc2.fillStyle = "black";
    crc2.ellipse(landingPadX + landingPadWidth / 2, landingPadY + landingPadHeight / 2, landingPadWidth / 2, landingPadHeight / 2, 0, 0, 2 * Math.PI);
    crc2.fill();
    // Kiosk zeichnen
    crc2.fillStyle = "red";
    crc2.fillRect(canvasWidth * 0.8, canvasHeight * 0.7, 50, 80);
    // Windhose zeichnen
    crc2.strokeStyle = "black";
    crc2.lineWidth = 2;
    crc2.beginPath();
    crc2.moveTo(canvasWidth * 0.85, canvasHeight * 0.5);
    crc2.lineTo(canvasWidth * 0.95, canvasHeight * 0.5);
    crc2.stroke();
    crc2.beginPath();
    crc2.moveTo(canvasWidth * 0.9, canvasHeight * 0.45);
    crc2.lineTo(canvasWidth * 0.95, canvasHeight * 0.5);
    crc2.lineTo(canvasWidth * 0.9, canvasHeight * 0.55);
    crc2.stroke();
    function getRandomDecimal() {
        return parseFloat((Math.random()).toFixed(1));
    }
    function randomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
    // Sonne im oberen rechten Rand zeichnen
    function drawSun() {
        let sunRadius = Math.min(40) + getRandomDecimal() * 100;
        let sunX = canvasWidth - sunRadius - 20;
        let sunY = sunRadius + 80;
        crc2.fillStyle = "yellow";
        crc2.beginPath();
        crc2.arc(sunX, sunY, sunRadius, 0, 2 * Math.PI);
        crc2.fill();
    }
    function drawMountain() {
        crc2.fillStyle = "grey";
        crc2.beginPath();
        crc2.moveTo(0, canvasHeight / 3);
        crc2.lineTo(canvasWidth / 4, canvasHeight / 1.8 + 120);
        crc2.lineTo(canvasWidth - canvasWidth * 1, canvasHeight - 150);
        crc2.fill();
    }
    function drawClouds() {
        // Farbe und Größe der Wolken
        const cloudColor = "#fff";
        const cloudWidth = 100;
        const cloudHeight = 60;
        // Anzahl der Wolken
        const numClouds = 6;
        const minX = 0; // 1/3 der Breite
        const minY = 0; // 1/3 der Höhe
        const maxX = (3 * canvasWidth) / 4; // 2/3 der Breite
        const maxY = (canvasHeight * 1) / 3; // 2/3 der Höhe
        for (let i = 0; i < numClouds; i++) {
            // Zufällige Position der Wolken
            const cloudX = Math.random() * (maxX - minX) + minX;
            const cloudY = Math.random() * (maxY - minY) + minY;
            // Zeichnen der Wolke
            crc2.beginPath();
            crc2.moveTo(cloudX, cloudY);
            crc2.bezierCurveTo(cloudX + cloudWidth / 2, cloudY - cloudHeight / 2, cloudX + cloudWidth / 2, cloudY + cloudHeight / 2, cloudX, cloudY + cloudHeight / 2);
            crc2.bezierCurveTo(cloudX - cloudWidth / 2, cloudY + cloudHeight / 2, cloudX - cloudWidth / 2, cloudY - cloudHeight / 2, cloudX, cloudY);
            crc2.fillStyle = cloudColor;
            crc2.fill();
            crc2.closePath();
        }
    }
})(A008_2_Luftfahrt || (A008_2_Luftfahrt = {}));
//# sourceMappingURL=script.js.map