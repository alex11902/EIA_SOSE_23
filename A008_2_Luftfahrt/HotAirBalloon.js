"use strict";
var LuftfahrtPolymorphie;
(function (LuftfahrtPolymorphie) {
    class HotAirBalloon extends LuftfahrtPolymorphie.Moveable {
        position;
        velosity;
        constructor() {
            super();
            console.log("Balloon constructor");
            this.position = new LuftfahrtPolymorphie.Vector(480, 400);
            this.velosity = new LuftfahrtPolymorphie.Vector(0, 0);
            this.velosity.random(100, 150);
        }
        move(_timeslice) {
            //console.log("Balloon move");
            let offset = new LuftfahrtPolymorphie.Vector(this.velosity.x, this.velosity.y);
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
                this.velosity.x *= -1;
            }
            else if (this.position.x > 820) {
                this.position.x = 820;
                this.velosity.x *= -1;
            }
        }
        draw() {
            //console.log("Balloon draw"); // Ballon
            // Ballon
            LuftfahrtPolymorphie.crc2.beginPath();
            LuftfahrtPolymorphie.crc2.arc(this.position.x, this.position.y, 25, 0, Math.PI * 2);
            LuftfahrtPolymorphie.crc2.fillStyle = "orange";
            LuftfahrtPolymorphie.crc2.fill();
            LuftfahrtPolymorphie.crc2.closePath();
            // Seile
            LuftfahrtPolymorphie.crc2.beginPath();
            LuftfahrtPolymorphie.crc2.moveTo(this.position.x - 15, this.position.y + 20);
            LuftfahrtPolymorphie.crc2.lineTo(this.position.x - 5, this.position.y + 45);
            LuftfahrtPolymorphie.crc2.moveTo(this.position.x + 15, this.position.y + 20);
            LuftfahrtPolymorphie.crc2.lineTo(this.position.x + 5, this.position.y + 45);
            LuftfahrtPolymorphie.crc2.strokeStyle = "black";
            LuftfahrtPolymorphie.crc2.lineWidth = 1;
            LuftfahrtPolymorphie.crc2.stroke();
            LuftfahrtPolymorphie.crc2.closePath();
            // Korb
            LuftfahrtPolymorphie.crc2.beginPath();
            LuftfahrtPolymorphie.crc2.rect(this.position.x - 12.5, this.position.y + 45, 25, 20);
            LuftfahrtPolymorphie.crc2.fillStyle = "brown";
            LuftfahrtPolymorphie.crc2.fill();
            LuftfahrtPolymorphie.crc2.closePath();
        }
    }
    LuftfahrtPolymorphie.HotAirBalloon = HotAirBalloon;
})(LuftfahrtPolymorphie || (LuftfahrtPolymorphie = {}));
//# sourceMappingURL=HotAirBalloon.js.map