"use strict";
/*
Aufgabe: <L09.2_Luftfahrt_Classes>
Name: <Alexander Vincent Holstein>
Matrikel: <271466>
Datum: <31.05.2023>
Quellen: <Lara Halmosi,insects and windsock inspired by Marie Eckl, chat GPT, mozilla.org>
*/
// Handle-load function
var LuftfahrtClasses;
(function (LuftfahrtClasses) {
    window.addEventListener("load", handleLoad);
    let golden = 0.62;
    let background;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        LuftfahrtClasses.crc2 = canvas.getContext("2d");
        let horizon = LuftfahrtClasses.crc2.canvas.height * golden;
        console.log("horizon");
        canvas = document.querySelector("canvas");
        LuftfahrtClasses.crc2 = canvas.getContext("2d");
        backgroundgradient();
        drawStaticObjects(horizon);
        background = LuftfahrtClasses.crc2.getImageData(0, 0, LuftfahrtClasses.crc2.canvas.width, LuftfahrtClasses.crc2.canvas.height);
        LuftfahrtClasses.crc2.putImageData(background, 0, 0);
        console.log(drawStaticObjects);
        let hotairballoon = new LuftfahrtClasses.HotAirBalloon(4);
        console.log(hotairballoon);
        createHotairballoons(4);
        HotAirBalloons.push(hotairballoon);
        let paraglider = new LuftfahrtClasses.Paraglider(5);
        console.log(paraglider);
        createParagliders(1);
        Paragliders.push(paraglider);
        let insect = new LuftfahrtClasses.Insect(1);
        console.log(insect);
        createInsects(5);
        Insects.push(insect);
        window.requestAnimationFrame(update);
        window.setInterval(update, 20);
    }
    function drawStaticObjects(horizon) {
        backgroundgradient();
        let sunPosition = new LuftfahrtClasses.Vector(700, 70);
        drawSun(sunPosition);
        let cloud1Position = new LuftfahrtClasses.Vector(50, 125);
        let cloud1Size = new LuftfahrtClasses.Vector(150, 50);
        drawClouds(cloud1Position, cloud1Size);
        let cloud2Position = new LuftfahrtClasses.Vector(300, 100);
        let cloud2Size = new LuftfahrtClasses.Vector(150, 50);
        drawClouds(cloud2Position, cloud2Size);
        let cloud3Position = new LuftfahrtClasses.Vector(600, 125);
        let cloud3Size = new LuftfahrtClasses.Vector(150, 50);
        drawClouds(cloud3Position, cloud3Size);
        let mountainsPosition = new LuftfahrtClasses.Vector(0, horizon);
        drawMountains(mountainsPosition, 75, 200, "grey", "white");
        let smallerMountainsPosition = new LuftfahrtClasses.Vector(0, horizon);
        drawMountains(smallerMountainsPosition, 50, 150, "grey", "lightgrey");
        drawTrees(horizon);
        let kioskPosition = new LuftfahrtClasses.Vector(680, 360);
        drawKiosk(kioskPosition);
        let landingPlacePosition = new LuftfahrtClasses.Vector(480, 400);
        drawLandingPlace(landingPlacePosition);
        drawfrontMountain("grey", "lightgrey");
        let windsockPosition = new LuftfahrtClasses.Vector(550, 390);
        drawWindsock(windsockPosition);
        drawGrass(150);
    }
    function backgroundgradient() {
        // Define linear Gradient
        let gradient = LuftfahrtClasses.crc2.createLinearGradient(0, 0, 0, LuftfahrtClasses.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue"); // lightblue
        gradient.addColorStop(golden, "HSL(291,2%,77%)"); // grey
        gradient.addColorStop(1, "HSL(100, 80%, 30%)"); // green
        // draw gradient
        LuftfahrtClasses.crc2.fillStyle = gradient;
        LuftfahrtClasses.crc2.fillRect(0, 0, LuftfahrtClasses.crc2.canvas.width, LuftfahrtClasses.crc2.canvas.height);
    }
    // Function sun
    function drawSun(_position) {
        console.log("sun", _position);
        let r1 = 30;
        let r2 = 100;
        let gradient = LuftfahrtClasses.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60,100%,90%,1)");
        gradient.addColorStop(1, "HSLA(60,100%,50%,0)");
        LuftfahrtClasses.crc2.save();
        LuftfahrtClasses.crc2.translate(_position.x, _position.y);
        LuftfahrtClasses.crc2.fillStyle = gradient;
        LuftfahrtClasses.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        LuftfahrtClasses.crc2.fill();
        LuftfahrtClasses.crc2.restore();
    }
    // Draw Clouds
    function drawClouds(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 20;
        let radiusParticle = 40;
        let particle = new Path2D();
        let gradient = LuftfahrtClasses.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0,100%,100%,0.5");
        gradient.addColorStop(1, "HSLA(0,100%,100%,0");
        LuftfahrtClasses.crc2.save();
        LuftfahrtClasses.crc2.translate(_position.x, _position.y);
        LuftfahrtClasses.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            LuftfahrtClasses.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -Math.random() * _size.y;
            LuftfahrtClasses.crc2.translate(x, y);
            LuftfahrtClasses.crc2.fill(particle);
            LuftfahrtClasses.crc2.restore();
        }
        LuftfahrtClasses.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains");
        // steps between Mountains and valley
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        LuftfahrtClasses.crc2.save();
        LuftfahrtClasses.crc2.translate(_position.x, _position.y);
        LuftfahrtClasses.crc2.beginPath();
        LuftfahrtClasses.crc2.moveTo(0, 0);
        LuftfahrtClasses.crc2.lineTo(0, -_max);
        //solange zeichnen bis komplette width ausgefüllt ist
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            LuftfahrtClasses.crc2.lineTo(x, y);
        } while (x < LuftfahrtClasses.crc2.canvas.width);
        LuftfahrtClasses.crc2.lineTo(x, 0);
        LuftfahrtClasses.crc2.closePath();
        let gradient = LuftfahrtClasses.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        LuftfahrtClasses.crc2.fillStyle = gradient;
        LuftfahrtClasses.crc2.fill();
        LuftfahrtClasses.crc2.restore();
    }
    function drawTrees(horizon) {
        // Anzahl der Bäume festlegen
        const numberOfTrees = 40;
        // Baumparameter festlegen
        const treeHeight = 30;
        const treeColor = "darkgreen";
        const trunkColor = "brown";
        // Zufällige Positionen für die Bäume generieren
        for (let i = 0; i < numberOfTrees; i++) {
            const treeX = Math.random() * LuftfahrtClasses.crc2.canvas.width;
            const treeY = horizon - treeHeight;
            // Baumstamm zeichnen
            LuftfahrtClasses.crc2.fillStyle = trunkColor;
            LuftfahrtClasses.crc2.fillRect(treeX - 5, treeY + treeHeight, 10, -treeHeight * 0.4);
            // Baumkronen zeichnen
            LuftfahrtClasses.crc2.beginPath();
            LuftfahrtClasses.crc2.moveTo(treeX, treeY);
            LuftfahrtClasses.crc2.lineTo(treeX + 25, treeY + 20);
            LuftfahrtClasses.crc2.lineTo(treeX - 25, treeY + 20);
            LuftfahrtClasses.crc2.closePath();
            LuftfahrtClasses.crc2.fillStyle = treeColor;
            LuftfahrtClasses.crc2.fill();
            LuftfahrtClasses.crc2.beginPath();
            LuftfahrtClasses.crc2.moveTo(treeX, treeY - 10);
            LuftfahrtClasses.crc2.lineTo(treeX + 20, treeY + 10);
            LuftfahrtClasses.crc2.lineTo(treeX - 20, treeY + 10);
            LuftfahrtClasses.crc2.closePath();
            LuftfahrtClasses.crc2.fillStyle = treeColor;
            LuftfahrtClasses.crc2.fill();
            LuftfahrtClasses.crc2.beginPath();
            LuftfahrtClasses.crc2.moveTo(treeX, treeY - 20);
            LuftfahrtClasses.crc2.lineTo(treeX + 15, treeY);
            LuftfahrtClasses.crc2.lineTo(treeX - 15, treeY);
            LuftfahrtClasses.crc2.closePath();
            LuftfahrtClasses.crc2.fillStyle = treeColor;
            LuftfahrtClasses.crc2.fill();
        }
    }
    function drawKiosk(_position) {
        console.log("kiosk");
        // Farben für  Kiosk festlegen
        let roofColor = "hsl(15,49%,50%)"; //brown
        let windowColor = "#FFFFFF"; // white
        let hutColor = "hsl(15,49%,50%)"; // brown
        // Größe des Kiosks festlegen
        let kioskWidth = 80;
        let kioskHeight = 60;
        LuftfahrtClasses.crc2.save();
        // Dach zeichnen
        LuftfahrtClasses.crc2.fillStyle = roofColor;
        LuftfahrtClasses.crc2.beginPath();
        LuftfahrtClasses.crc2.moveTo(_position.x, _position.y);
        LuftfahrtClasses.crc2.lineTo(_position.x + kioskWidth / 2, _position.y - kioskHeight / 3);
        LuftfahrtClasses.crc2.lineTo(_position.x + kioskWidth, _position.y);
        LuftfahrtClasses.crc2.closePath();
        LuftfahrtClasses.crc2.fill();
        LuftfahrtClasses.crc2.restore();
        // Fenster zeichnen
        LuftfahrtClasses.crc2.fillStyle = windowColor;
        LuftfahrtClasses.crc2.fillRect(_position.x, _position.y, kioskWidth, kioskHeight);
        // Hütte zeichnen
        let hutWidth = kioskWidth;
        let hutHeight = kioskHeight / 2;
        let hutX = _position.x + (kioskWidth - hutWidth) / 2;
        let hutY = _position.y + kioskHeight - hutHeight;
        LuftfahrtClasses.crc2.fillStyle = hutColor;
        LuftfahrtClasses.crc2.fillRect(hutX, hutY, hutWidth, hutHeight);
    }
    function drawLandingPlace(_position) {
        LuftfahrtClasses.crc2.beginPath();
        LuftfahrtClasses.crc2.ellipse(_position.x, _position.y, 30, 100, Math.PI / 2, 0, 2 * Math.PI);
        // Ellipse füllen
        LuftfahrtClasses.crc2.fillStyle = "HSLA(111,47%,56%)";
        LuftfahrtClasses.crc2.fill();
    }
    function drawfrontMountain(_colorLow, _colorHigh) {
        LuftfahrtClasses.crc2.save();
        LuftfahrtClasses.crc2.beginPath();
        LuftfahrtClasses.crc2.moveTo(-50, 400);
        LuftfahrtClasses.crc2.lineTo(0, 50);
        LuftfahrtClasses.crc2.lineTo(250, 430);
        LuftfahrtClasses.crc2.closePath();
        let gradient = LuftfahrtClasses.crc2.createLinearGradient(250, 430, 0, 50);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        LuftfahrtClasses.crc2.fillStyle = gradient;
        LuftfahrtClasses.crc2.fill();
        LuftfahrtClasses.crc2.restore();
    }
    function drawWindsock(_position) {
        //Stab
        LuftfahrtClasses.crc2.beginPath();
        LuftfahrtClasses.crc2.fillStyle = "black";
        LuftfahrtClasses.crc2.fillRect(_position.x, _position.y, 5, 60);
        LuftfahrtClasses.crc2.closePath();
        //Windsack
        LuftfahrtClasses.crc2.beginPath();
        LuftfahrtClasses.crc2.fillStyle = "#d90000";
        LuftfahrtClasses.crc2.moveTo(_position.x, _position.y);
        LuftfahrtClasses.crc2.lineTo(_position.x, _position.y);
        LuftfahrtClasses.crc2.lineTo(600, 400);
        LuftfahrtClasses.crc2.lineTo(600, 410);
        LuftfahrtClasses.crc2.lineTo(_position.x, 415);
        LuftfahrtClasses.crc2.fill();
        LuftfahrtClasses.crc2.closePath();
    }
    ;
    function drawGrass(numGrass) {
        let grassColor = '#00ad0e';
        for (let i = 0; i < numGrass; i++) {
            const x = Math.random() * LuftfahrtClasses.crc2.canvas.width;
            const y = 450 + Math.random() * 20;
            const grassHeight = 50;
            const grassWidth = Math.random() * 2 + 1;
            LuftfahrtClasses.crc2.beginPath();
            LuftfahrtClasses.crc2.moveTo(x, y);
            LuftfahrtClasses.crc2.lineTo(x + grassWidth, y + grassHeight);
            LuftfahrtClasses.crc2.strokeStyle = grassColor;
            LuftfahrtClasses.crc2.lineWidth = grassWidth;
            LuftfahrtClasses.crc2.stroke();
        }
    }
    function update() {
        LuftfahrtClasses.crc2.clearRect(0, 0, LuftfahrtClasses.crc2.canvas.width, LuftfahrtClasses.crc2.canvas.height);
        LuftfahrtClasses.crc2.putImageData(background, 0, 0);
        for (let hotairballoon of HotAirBalloons) {
            hotairballoon.move(1 / 300);
            hotairballoon.draw();
        }
        for (let insect of Insects) {
            insect.move(1 / 70);
            insect.draw();
        }
    }
    LuftfahrtClasses.update = update;
})(LuftfahrtClasses || (LuftfahrtClasses = {}));
//# sourceMappingURL=Main.js.map