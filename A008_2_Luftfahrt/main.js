"use strict";
/*
Aufgabe: <L10.2_Luftfahrt_Polymorphie>
Name: <Alexander Holstein>
Matrikel: <271466>
Datum: <24.06.2023>
Quellen: <Marie Eckl,Theresa Hauser, chat GPT,Lara Halmosi>
*/
// Handle-load function
var LuftfahrtPolymorphie;
(function (LuftfahrtPolymorphie) {
    window.addEventListener("load", handleLoad);
    let golden = 0.62;
    let background;
    let moveables = [];
    console.log(moveables);
    create();
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        LuftfahrtPolymorphie.crc2 = canvas.getContext("2d");
        let horizon = LuftfahrtPolymorphie.crc2.canvas.height * golden;
        console.log("horizon");
        canvas = document.querySelector("canvas");
        LuftfahrtPolymorphie.crc2 = canvas.getContext("2d");
        backgroundgradient();
        drawStaticObjects(horizon);
        background = LuftfahrtPolymorphie.crc2.getImageData(0, 0, LuftfahrtPolymorphie.crc2.canvas.width, LuftfahrtPolymorphie.crc2.canvas.height);
        LuftfahrtPolymorphie.crc2.putImageData(background, 0, 0);
        console.log(drawStaticObjects);
        window.requestAnimationFrame(update);
        window.setInterval(update, 20);
    }
    // namespace LuftfahrtPolymorphie {
    class HotAirBalloon extends LuftfahrtPolymorphie.Moveable {
        position;
        velocity;
        isPopped;
        constructor() {
            super();
            console.log("Balloon constructor");
            this.position = new LuftfahrtPolymorphie.Vector(480, 400);
            this.velocity = new LuftfahrtPolymorphie.Vector(0, 0);
            this.velocity.random(100, 150);
            this.isPopped = false;
            // Event Listener für den Klick auf den Ballon hinzufügen
            //let canvas =<HTMLCanvasElement>document.querySelector('#canvas');
            //canvas.addEventListener("click", this.handleClick.bind(this));
        }
        move(_timeslice) {
            if (this.isPopped) {
                // Wenn der Ballon geplatzt ist, fällt er zum Boden
                this.position.y += 5; // Geschwindigkeit des Falls anpassen
                return;
            }
            let offset = new LuftfahrtPolymorphie.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice * 0.2);
            this.position.add(offset);
            // Begrenzung auf y-Maximum
            if (this.position.y < 100) {
                this.position.y = 100;
            }
            else if (this.position.y > 200) {
                this.position.y = 200;
            }
            // Begrenzung auf Canvas-Breite
            if (this.position.x < 0) {
                this.position.x = 0;
                this.velocity.x *= -1;
            }
            else if (this.position.x > 820) {
                this.position.x = 820;
                this.velocity.x *= -1;
            }
        }
        draw() {
            if (this.isPopped) {
                // Wenn der Ballon geplatzt ist, zeichne nichts mehr
                return;
            }
            // Zeichne den Ballon
            LuftfahrtPolymorphie.crc2.beginPath();
            LuftfahrtPolymorphie.crc2.arc(this.position.x, this.position.y, 25, 0, Math.PI * 2);
            LuftfahrtPolymorphie.crc2.fillStyle = "magenta";
            LuftfahrtPolymorphie.crc2.fill();
            LuftfahrtPolymorphie.crc2.closePath();
            // Zeichne die Seile
            LuftfahrtPolymorphie.crc2.beginPath();
            LuftfahrtPolymorphie.crc2.moveTo(this.position.x - 15, this.position.y + 20);
            LuftfahrtPolymorphie.crc2.lineTo(this.position.x - 5, this.position.y + 45);
            LuftfahrtPolymorphie.crc2.moveTo(this.position.x + 15, this.position.y + 20);
            LuftfahrtPolymorphie.crc2.lineTo(this.position.x + 5, this.position.y + 45);
            LuftfahrtPolymorphie.crc2.strokeStyle = "black";
            LuftfahrtPolymorphie.crc2.lineWidth = 1;
            LuftfahrtPolymorphie.crc2.stroke();
            LuftfahrtPolymorphie.crc2.closePath();
            // Zeichne den Korb
            LuftfahrtPolymorphie.crc2.beginPath();
            LuftfahrtPolymorphie.crc2.rect(this.position.x - 12.5, this.position.y + 45, 25, 20);
            LuftfahrtPolymorphie.crc2.fillStyle = "brown";
            LuftfahrtPolymorphie.crc2.fill();
            LuftfahrtPolymorphie.crc2.closePath();
        }
        handleClick(event) {
            const clickX = event.clientX;
            const clickY = event.clientY;
            // Überprüfe, ob der Klick innerhalb des Ballons erfolgt ist
            const distance = Math.sqrt((clickX - this.position.x) ** 2 + (clickY - this.position.y) ** 2);
            if (distance <= 25) {
                // Ballon platzen lassen, wenn er angeklickt wurde
                this.isPopped = true;
            }
        }
    }
    //  }
    function drawStaticObjects(horizon) {
        backgroundgradient();
        let sunPosition = new LuftfahrtPolymorphie.Vector(700, 70);
        drawSun(sunPosition);
        let cloud1Position = new LuftfahrtPolymorphie.Vector(50, 125);
        let cloud1Size = new LuftfahrtPolymorphie.Vector(150, 50);
        drawClouds(cloud1Position, cloud1Size);
        let cloud2Position = new LuftfahrtPolymorphie.Vector(300, 100);
        let cloud2Size = new LuftfahrtPolymorphie.Vector(150, 50);
        drawClouds(cloud2Position, cloud2Size);
        let cloud3Position = new LuftfahrtPolymorphie.Vector(600, 125);
        let cloud3Size = new LuftfahrtPolymorphie.Vector(150, 50);
        drawClouds(cloud3Position, cloud3Size);
        let mountainsPosition = new LuftfahrtPolymorphie.Vector(0, horizon);
        drawMountains(mountainsPosition, 75, 200, "grey", "white");
        let smallerMountainsPosition = new LuftfahrtPolymorphie.Vector(0, horizon);
        drawMountains(smallerMountainsPosition, 50, 150, "grey", "lightgrey");
        drawTrees(horizon);
        let kioskPosition = new LuftfahrtPolymorphie.Vector(680, 360);
        drawKiosk(kioskPosition);
        let landingPlacePosition = new LuftfahrtPolymorphie.Vector(480, 400);
        drawLandingPlace(landingPlacePosition);
        drawfrontMountain("grey", "lightgrey");
        let windsockPosition = new LuftfahrtPolymorphie.Vector(550, 390);
        drawWindsock(windsockPosition);
        drawGrass(150);
    }
    function backgroundgradient() {
        // Define linear Gradient
        let gradient = LuftfahrtPolymorphie.crc2.createLinearGradient(0, 0, 0, LuftfahrtPolymorphie.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue"); // lightblue
        gradient.addColorStop(golden, "HSL(291,2%,77%)"); // grey
        gradient.addColorStop(1, "HSL(100, 80%, 30%)"); // green
        // draw gradient
        LuftfahrtPolymorphie.crc2.fillStyle = gradient;
        LuftfahrtPolymorphie.crc2.fillRect(0, 0, LuftfahrtPolymorphie.crc2.canvas.width, LuftfahrtPolymorphie.crc2.canvas.height);
    }
    // Function sun
    function drawSun(_position) {
        console.log("sun", _position);
        let r1 = 30;
        let r2 = 100;
        let gradient = LuftfahrtPolymorphie.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60,100%,90%,1)");
        gradient.addColorStop(1, "HSLA(60,100%,50%,0)");
        LuftfahrtPolymorphie.crc2.save();
        LuftfahrtPolymorphie.crc2.translate(_position.x, _position.y);
        LuftfahrtPolymorphie.crc2.fillStyle = gradient;
        LuftfahrtPolymorphie.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        LuftfahrtPolymorphie.crc2.fill();
        LuftfahrtPolymorphie.crc2.restore();
    }
    // Draw Clouds
    function drawClouds(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 20;
        let radiusParticle = 40;
        let particle = new Path2D();
        let gradient = LuftfahrtPolymorphie.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0,100%,100%,0.5");
        gradient.addColorStop(1, "HSLA(0,100%,100%,0");
        LuftfahrtPolymorphie.crc2.save();
        LuftfahrtPolymorphie.crc2.translate(_position.x, _position.y);
        LuftfahrtPolymorphie.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            LuftfahrtPolymorphie.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -Math.random() * _size.y;
            LuftfahrtPolymorphie.crc2.translate(x, y);
            LuftfahrtPolymorphie.crc2.fill(particle);
            LuftfahrtPolymorphie.crc2.restore();
        }
        LuftfahrtPolymorphie.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains");
        // steps between Mountains and valley
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        LuftfahrtPolymorphie.crc2.save();
        LuftfahrtPolymorphie.crc2.translate(_position.x, _position.y);
        LuftfahrtPolymorphie.crc2.beginPath();
        LuftfahrtPolymorphie.crc2.moveTo(0, 0);
        LuftfahrtPolymorphie.crc2.lineTo(0, -_max);
        //solange zeichnen bis komplette width ausgefüllt ist
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            LuftfahrtPolymorphie.crc2.lineTo(x, y);
        } while (x < LuftfahrtPolymorphie.crc2.canvas.width);
        LuftfahrtPolymorphie.crc2.lineTo(x, 0);
        LuftfahrtPolymorphie.crc2.closePath();
        let gradient = LuftfahrtPolymorphie.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        LuftfahrtPolymorphie.crc2.fillStyle = gradient;
        LuftfahrtPolymorphie.crc2.fill();
        LuftfahrtPolymorphie.crc2.restore();
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
            const treeX = Math.random() * LuftfahrtPolymorphie.crc2.canvas.width;
            const treeY = horizon - treeHeight;
            // Baumstamm zeichnen
            LuftfahrtPolymorphie.crc2.fillStyle = trunkColor;
            LuftfahrtPolymorphie.crc2.fillRect(treeX - 5, treeY + treeHeight, 10, -treeHeight * 0.4);
            // Baumkronen zeichnen
            LuftfahrtPolymorphie.crc2.beginPath();
            LuftfahrtPolymorphie.crc2.moveTo(treeX, treeY);
            LuftfahrtPolymorphie.crc2.lineTo(treeX + 25, treeY + 20);
            LuftfahrtPolymorphie.crc2.lineTo(treeX - 25, treeY + 20);
            LuftfahrtPolymorphie.crc2.closePath();
            LuftfahrtPolymorphie.crc2.fillStyle = treeColor;
            LuftfahrtPolymorphie.crc2.fill();
            LuftfahrtPolymorphie.crc2.beginPath();
            LuftfahrtPolymorphie.crc2.moveTo(treeX, treeY - 10);
            LuftfahrtPolymorphie.crc2.lineTo(treeX + 20, treeY + 10);
            LuftfahrtPolymorphie.crc2.lineTo(treeX - 20, treeY + 10);
            LuftfahrtPolymorphie.crc2.closePath();
            LuftfahrtPolymorphie.crc2.fillStyle = treeColor;
            LuftfahrtPolymorphie.crc2.fill();
            LuftfahrtPolymorphie.crc2.beginPath();
            LuftfahrtPolymorphie.crc2.moveTo(treeX, treeY - 20);
            LuftfahrtPolymorphie.crc2.lineTo(treeX + 15, treeY);
            LuftfahrtPolymorphie.crc2.lineTo(treeX - 15, treeY);
            LuftfahrtPolymorphie.crc2.closePath();
            LuftfahrtPolymorphie.crc2.fillStyle = treeColor;
            LuftfahrtPolymorphie.crc2.fill();
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
        LuftfahrtPolymorphie.crc2.save();
        // Dach zeichnen
        LuftfahrtPolymorphie.crc2.fillStyle = roofColor;
        LuftfahrtPolymorphie.crc2.beginPath();
        LuftfahrtPolymorphie.crc2.moveTo(_position.x, _position.y);
        LuftfahrtPolymorphie.crc2.lineTo(_position.x + kioskWidth / 2, _position.y - kioskHeight / 3);
        LuftfahrtPolymorphie.crc2.lineTo(_position.x + kioskWidth, _position.y);
        LuftfahrtPolymorphie.crc2.closePath();
        LuftfahrtPolymorphie.crc2.fill();
        LuftfahrtPolymorphie.crc2.restore();
        // Fenster zeichnen
        LuftfahrtPolymorphie.crc2.fillStyle = windowColor;
        LuftfahrtPolymorphie.crc2.fillRect(_position.x, _position.y, kioskWidth, kioskHeight);
        // Hütte zeichnen
        let hutWidth = kioskWidth;
        let hutHeight = kioskHeight / 2;
        let hutX = _position.x + (kioskWidth - hutWidth) / 2;
        let hutY = _position.y + kioskHeight - hutHeight;
        LuftfahrtPolymorphie.crc2.fillStyle = hutColor;
        LuftfahrtPolymorphie.crc2.fillRect(hutX, hutY, hutWidth, hutHeight);
    }
    function drawLandingPlace(_position) {
        LuftfahrtPolymorphie.crc2.beginPath();
        LuftfahrtPolymorphie.crc2.ellipse(_position.x, _position.y, 30, 100, Math.PI / 2, 0, 2 * Math.PI);
        // Ellipse füllen
        LuftfahrtPolymorphie.crc2.fillStyle = "HSLA(111,47%,56%)";
        LuftfahrtPolymorphie.crc2.fill();
    }
    function drawfrontMountain(_colorLow, _colorHigh) {
        LuftfahrtPolymorphie.crc2.save();
        LuftfahrtPolymorphie.crc2.beginPath();
        LuftfahrtPolymorphie.crc2.moveTo(-50, 400);
        LuftfahrtPolymorphie.crc2.lineTo(0, 50);
        LuftfahrtPolymorphie.crc2.lineTo(250, 430);
        LuftfahrtPolymorphie.crc2.closePath();
        let gradient = LuftfahrtPolymorphie.crc2.createLinearGradient(250, 430, 0, 50);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        LuftfahrtPolymorphie.crc2.fillStyle = gradient;
        LuftfahrtPolymorphie.crc2.fill();
        LuftfahrtPolymorphie.crc2.restore();
    }
    function drawWindsock(_position) {
        //Stab
        LuftfahrtPolymorphie.crc2.beginPath();
        LuftfahrtPolymorphie.crc2.fillStyle = "black";
        LuftfahrtPolymorphie.crc2.fillRect(_position.x, _position.y, 5, 60);
        LuftfahrtPolymorphie.crc2.closePath();
        //Windsack
        LuftfahrtPolymorphie.crc2.beginPath();
        LuftfahrtPolymorphie.crc2.fillStyle = "#d90000";
        LuftfahrtPolymorphie.crc2.moveTo(_position.x, _position.y);
        LuftfahrtPolymorphie.crc2.lineTo(_position.x, _position.y);
        LuftfahrtPolymorphie.crc2.lineTo(600, 400);
        LuftfahrtPolymorphie.crc2.lineTo(600, 410);
        LuftfahrtPolymorphie.crc2.lineTo(_position.x, 415);
        LuftfahrtPolymorphie.crc2.fill();
        LuftfahrtPolymorphie.crc2.closePath();
    }
    function drawGrass(numGrass) {
        let grassColor = "#00ad0e";
        for (let i = 0; i < numGrass; i++) {
            const x = Math.random() * LuftfahrtPolymorphie.crc2.canvas.width;
            const y = 450 + Math.random() * 20;
            const grassHeight = 50;
            const grassWidth = Math.random() * 2 + 1;
            LuftfahrtPolymorphie.crc2.beginPath();
            LuftfahrtPolymorphie.crc2.moveTo(x, y);
            LuftfahrtPolymorphie.crc2.lineTo(x + grassWidth, y + grassHeight);
            LuftfahrtPolymorphie.crc2.strokeStyle = grassColor;
            LuftfahrtPolymorphie.crc2.lineWidth = grassWidth;
            LuftfahrtPolymorphie.crc2.stroke();
        }
    }
    function create() {
        for (let index = 0; index < 5; index++) {
            let hotairballoon = new HotAirBalloon();
            moveables.push(hotairballoon);
        }
        for (let index = 0; index < 4; index++) {
            let paraglider = new LuftfahrtPolymorphie.Paraglider();
            moveables.push(paraglider);
        }
        for (let index = 0; index < 10; index++) {
            let insect = new LuftfahrtPolymorphie.Insect();
            moveables.push(insect);
        }
    }
    function update() {
        LuftfahrtPolymorphie.crc2.clearRect(0, 0, LuftfahrtPolymorphie.crc2.canvas.width, LuftfahrtPolymorphie.crc2.canvas.height);
        LuftfahrtPolymorphie.crc2.putImageData(background, 0, 0);
        for (let moveable of moveables) {
            moveable.move(1 / 60);
            moveable.draw();
        }
    }
    LuftfahrtPolymorphie.update = update;
})(LuftfahrtPolymorphie || (LuftfahrtPolymorphie = {}));
//# sourceMappingURL=main.js.map