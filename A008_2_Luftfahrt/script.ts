/*
      Aufgabe: <Aufgabe 8.2 Luftfahrt>
      Name: <Alexander Holstein>
      Matrikel: <271466>
      Datum: <06.05.23>
      Quellen: Inverted classroom, Internetrecherche
      */

// Canvas erstellen
namespace A008_2_Luftfahrt {

    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;

    // Canvas erstellen


    // interface Vektor {

    //     x: number;
    //     y: number;

    // };


    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {

        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        canvas.width = canvasWidth
        canvas.height = canvasHeight
        crc2 = canvas.getContext("2d")!;

        drawBackground();
        drawSun();
        drawClouds();
        drawMountain();

    }

    // Hintergrund zeichnen
    function drawBackground() {

        // Farbe und Höhe der Berge

        let gradient: CanvasGradient = crc2!.createLinearGradient(0, 0, 0, crc2!.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.5, "white");
        gradient.addColorStop(1, "#35682d");

        crc2!.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2!.canvas.width, crc2!.canvas.height);
        crc2!.closePath();

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
    };



    // Windhose zeichnen
    crc2!.strokeStyle = "black";
    crc2!.lineWidth = 2;
    crc2!.beginPath();
    crc2!.moveTo(canvasWidth * 0.85, canvasHeight * 0.5);
    crc2!.lineTo(canvasWidth * 0.95, canvasHeight * 0.5);
    crc2!.stroke();
    crc2!.beginPath();
    crc2!.moveTo(canvasWidth * 0.9, canvasHeight * 0.45);
    crc2!.lineTo(canvasWidth * 0.95, canvasHeight * 0.5);
    crc2!.lineTo(canvasWidth * 0.9, canvasHeight * 0.55);
    crc2!.stroke();

    function getRandomDecimal(): number {
        return parseFloat((Math.random()).toFixed(1));
    }

    
    // Sonne im oberen rechten Rand zeichnen
    function drawSun() {
        let sunRadius = Math.min(40) + getRandomDecimal() * 100;
        let sunX = canvasWidth - sunRadius - 20;
        let sunY = sunRadius + 80;
        crc2!.fillStyle = "yellow";
        crc2!.beginPath();
        crc2!.arc(sunX, sunY, sunRadius, 0, 2 * Math.PI);
        crc2!.fill();
    }

    function drawMountain(){

        const mountainColor = "#a9a9a9";
        const mountainHeight = canvasHeight / 2; // Die Hälfte der Höhe des Canvas

        // Position und Breite des Berges
        const mountainX = 0; // Linker Rand des Canvas
        const mountainWidth = canvasWidth / 4; // 1/4 der Breite des Canvas

        // Zeichnen des Berges
        crc2!.beginPath();
        crc2!.moveTo(mountainX, canvasHeight);
        crc2!.lineTo(mountainX + mountainWidth / 2, canvasHeight - mountainHeight);
        crc2!.lineTo(mountainX + mountainWidth, canvasHeight);
        crc2!.closePath();

        crc2!.fillStyle = mountainColor;
        crc2!.fill();
    }



    function drawClouds(): void {

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
            crc2!.beginPath();
            crc2!.moveTo(cloudX, cloudY);
            crc2!.bezierCurveTo(
                cloudX + cloudWidth / 2,
                cloudY - cloudHeight / 2,
                cloudX + cloudWidth / 2,
                cloudY + cloudHeight / 2,
                cloudX,
                cloudY + cloudHeight / 2
            );
            crc2!.bezierCurveTo(
                cloudX - cloudWidth / 2,
                cloudY + cloudHeight / 2,
                cloudX - cloudWidth / 2,
                cloudY - cloudHeight / 2,
                cloudX,
                cloudY
            );
            crc2!.fillStyle = cloudColor;
            crc2!.fill();
            crc2!.closePath();
        }
    }



}