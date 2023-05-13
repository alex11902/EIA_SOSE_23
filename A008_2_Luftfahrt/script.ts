/*
      Aufgabe: <Aufgabe 8.2 Luftfahrt>
      Name: <Alexander Holstein>
      Matrikel: <271466>
      Datum: <06.05.23>
      Quellen: Inverted classroom, Lektionsarbeit, mathe von ki
      */

// Canvas erstellen
namespace A008_2_Luftfahrt {

    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;



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
        drawLandeplatz();
        //drawWindhose()
        drawTrees();
        drawHouse();
        drawPeople();

    }

    function randomColor(): string {

        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;

    }

    // Hintergrund zeichnen
    function drawBackground() {


        let gradient: CanvasGradient = crc2!.createLinearGradient(0, 0, 0, crc2!.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.5, "white");
        gradient.addColorStop(1, "#35682d");

        crc2!.fillStyle = gradient;
        crc2!.fillRect(0, 0, crc2!.canvas.width, crc2!.canvas.height);
        crc2!.closePath();

        // Farbe und Höhe der Berge
        const mountainColor = "#a9a9a9";
        const mountainHeight = (canvasHeight / 4) * 0.8; // 1/4 der Höhe

        // Anzahl der Berge
        const numMountains = 3;

        for (let i = 0; i < numMountains; i++) {
            // Zufällige Position und Breite des Berges
            const mountainX = Math.random() * canvasWidth;
            const mountainWidth = Math.random() * (canvasWidth / 5) + canvasWidth / 44;

            // Verschiebung der Bergposition in die Mitte der Höhe des Canvas
            const mountainY = (canvasHeight - mountainHeight) / 3;

            // Zeichnen des Berges
            crc2.beginPath();
            crc2.moveTo(mountainX, mountainY + mountainHeight);
            crc2.lineTo(mountainX + mountainWidth / 2, mountainY);
            crc2.lineTo(mountainX + mountainWidth, mountainY + mountainHeight);
            crc2.closePath();

            crc2.fillStyle = mountainColor;
            crc2.fill();
        };
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

    function drawMountain() {

        const mountainColor = "grey";
        const mountainHeight = canvasHeight / 3; // Die Hälfte der Höhe des Canvas

        // Position und Breite des Berges


        const mountainWidth = canvasWidth / 4; // 1/4 der Breite des Canvas
        const mountainX = 0 - mountainWidth + 175; // Linker Rand des Canvas

        // Verschiebung der Bergposition auf 1/3 der Höhe des Canvas
        const mountainY = (2 * canvasHeight) / 3; // 2/3 der Höhe des Canvas

        // Zeichnen des Berges
        crc2.beginPath();
        crc2.moveTo(mountainX, mountainY);
        crc2.lineTo(mountainX + mountainWidth / 2, mountainY - mountainHeight);
        crc2.lineTo(mountainX + mountainWidth, mountainY);
        crc2.closePath();

        crc2.fillStyle = mountainColor;
        crc2.fill();
    }

    function drawWindhose(): void {

        // Position und Größe des Fahnenmasts
        const poleX = canvasWidth / 2; // Horizontal zentriert
        const poleY = canvasHeight; // Am unteren Rand des Canvas
        const poleHeight = canvasHeight / 2; // Die Hälfte der Höhe des Canvas

        // Position und Größe der Windhose
        const whirlwindX = poleX; // Am Fahnenmast
        const whirlwindY = poleY - poleHeight; // Oberhalb des Fahnenmasts
        const whirlwindRadius = Math.min(canvasWidth, poleHeight) / 4; // Ein Viertel der kleineren Seitenlänge

        // Anfangs- und Endwinkel der Windhose
        const startAngle = 0;
        const endAngle = 2 * Math.PI;

        // Zeichnen des Fahnenmasts
        crc2.fillStyle = "#a9a9a9"; // Farbe des Fahnenmasts
        crc2.fillRect(poleX - 5, 0, 10, poleHeight);

        // Zeichnen der Windhose
        crc2.beginPath();
        crc2.arc(whirlwindX, whirlwindY, whirlwindRadius, startAngle, endAngle);
        crc2.closePath();

        // Farbverlauf für die Windhose
        const gradient = crc2.createRadialGradient(whirlwindX, whirlwindY, 0, whirlwindX, whirlwindY, whirlwindRadius);
        gradient.addColorStop(0, "#ffffff"); // Innerer Bereich
        gradient.addColorStop(1, "#a9a9a9"); // Äußerer Bereich

        crc2.fillStyle = gradient;
        crc2.fill();

    }


    function drawClouds(): void {

        // Farbe und Größe der Wolken
        const cloudColor = "#fff";
        const cloudWidth = 100;
        const cloudHeight = 60;

        // Anzahl der Wolken
        const numClouds = 6;
        const minX = 0;
        const minY = 0;
        const maxX = (3 * canvasWidth) / 4;
        const maxY = (canvasHeight * 1) / 3;

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

    function drawLandeplatz() {

        // Position und Abmessungen der Ellipse
        const ellipseX = canvasWidth / 2; // Horizontal zentriert
        const ellipseY = (canvasHeight / 2) + (canvasHeight / 8); // Unterhalb der Mitte
        const ellipseRadiusX = canvasWidth / 6; // Halbe Breite des Canvas
        const ellipseRadiusY = canvasHeight / 22; // 1/8 der Höhe des Canvas

        // Zeichnen der Ellipse
        crc2.beginPath();
        crc2.ellipse(ellipseX, ellipseY, ellipseRadiusX, ellipseRadiusY, 0, 0, 2 * Math.PI);
        crc2.closePath();

        crc2.fillStyle = "royalblue"; // Farbe der Ellipse
        crc2.stroke()
        crc2.fill();
    }

    function drawTrees(): void {
        // Anzahl der Bäume
        const numTrees = 3;

        for (let i = 0; i < numTrees; i++) {
            // Zufällige Position des Baums im unteren rechten Bereich
            const treeX = Math.random() * (canvasWidth / 2);
            const treeY = Math.random() * (canvasHeight / 2) + (canvasHeight / 1.4);

            // Größe des Baums
            const trunkWidth = 10 + Math.random() * 10;
            const trunkHeight = 40 + Math.random() * 20;
            const crownWidth = 80 + Math.random() * 50;
            const crownHeight = 110 + Math.random() * 30;

            // Zeichnen des Baumstamms
            crc2.fillStyle = "#8b4513"; // Farbe des Baumstamms (braun)
            crc2.fillRect(treeX - trunkWidth / 2, treeY - trunkHeight, trunkWidth, trunkHeight);

            // Zeichnen der Baumkrone mit Bezierkurven
            crc2.fillStyle = "#008000"; // Farbe der Baumkrone (grün)
            crc2.beginPath();
            crc2.moveTo(treeX, treeY - trunkHeight);

            const controlPointOffsetX = crownWidth / 2;
            const controlPointOffsetY = crownHeight / 2;
            const crownTopY = treeY - trunkHeight - crownHeight;

            crc2.bezierCurveTo(treeX - controlPointOffsetX, treeY - trunkHeight - controlPointOffsetY,
                treeX - controlPointOffsetX, crownTopY + controlPointOffsetY,
                treeX, crownTopY);
            crc2.bezierCurveTo(treeX + controlPointOffsetX, crownTopY + controlPointOffsetY,
                treeX + controlPointOffsetX, treeY - trunkHeight - controlPointOffsetY,
                treeX, treeY - trunkHeight);

            crc2.closePath();
            crc2.fill();
        }
    }

    function drawHouse() {

        // Position des Hauses
        const houseX = (4.5 / 6) * canvasWidth;
        const houseY = (55 / 100) * canvasHeight;

        // Größe des Hauses
        const houseWidth = 80;
        const houseHeight = 60;

        // Zeichnen des Hauses
        crc2.fillStyle = "#ff0000"; // Farbe des Hauses (rot)
        crc2.fillRect(houseX, houseY, houseWidth, houseHeight);

        // Zeichnen des Dachs
        crc2.beginPath();
        crc2.moveTo(houseX - 20, houseY);
        crc2.lineTo(houseX + houseWidth + 20, houseY);
        crc2.lineTo(houseX + houseWidth / 2, houseY - 40);
        crc2.closePath();
        crc2.fillStyle = "#800000"; // Farbe des Dachs (dunkelrot)
        crc2.fill();

    }


    function drawPeople() {
        // Anzahl der Strichmännchen
        const numStickFigures = 5

        for (let i = 0; i < numStickFigures; i++) {
            // Zufällige Position des Strichmännchens
            const stickFigureX = Math.random() * canvasWidth;
            const stickFigureY = Math.random() * canvasHeight;

            // Zeichnen des Strichmännchens
            crc2.strokeStyle = "#000000"; // Farbe des Strichmännchens (schwarz)

             // Fallschirm
             crc2.beginPath();
             crc2.arc(stickFigureX, stickFigureY , 45,  Math.PI * 1,0);
             crc2.closePath();
 
             const gradient = crc2.createRadialGradient(stickFigureX, stickFigureY - 40, 0, stickFigureX, stickFigureY - 40, 30);
             gradient.addColorStop(0,randomColor()); // Innerer Farbstop (rot)
             gradient.addColorStop(1, "black"); // Äußerer Farbstop (weiß)
             crc2.fillStyle = gradient;
             crc2.fill();

            // Kopf
            crc2.beginPath();
            crc2.arc(stickFigureX, stickFigureY, 10, 0, Math.PI * 2);
            crc2.closePath();
            crc2.stroke();

            // Körper
            crc2.beginPath();
            crc2.moveTo(stickFigureX, stickFigureY + 10);
            crc2.lineTo(stickFigureX, stickFigureY + 40);
            crc2.closePath();
            crc2.stroke();

            // Arme
            crc2.beginPath();
            crc2.moveTo(stickFigureX - 20, stickFigureY + 20);
            crc2.lineTo(stickFigureX + 20, stickFigureY + 20);
            crc2.closePath();
            crc2.stroke();

            // Beine
            crc2.beginPath();
            crc2.moveTo(stickFigureX, stickFigureY + 40);
            crc2.lineTo(stickFigureX - 20, stickFigureY + 70);
            crc2.moveTo(stickFigureX, stickFigureY + 40);
            crc2.lineTo(stickFigureX + 20, stickFigureY + 70);
            crc2.closePath();
            crc2.stroke();

           
        }
    }
}









