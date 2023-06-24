"use strict";
var LuftfahrtPolymorphie;
(function (LuftfahrtPolymorphie) {
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
            //   let canvas =<HTMLCanvasElement>document.querySelector('#canvas');
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
    LuftfahrtPolymorphie.HotAirBalloon = HotAirBalloon;
})(LuftfahrtPolymorphie || (LuftfahrtPolymorphie = {}));
//# sourceMappingURL=HotAirBalloon.js.map