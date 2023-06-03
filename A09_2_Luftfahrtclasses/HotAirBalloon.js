"use strict";
var LuftfahrtClasses;
(function (LuftfahrtClasses) {
    class HotAirBalloon {
        position;
        velosity;
        constructor(_size) {
            console.log("Balloon constructor");
            this.position = new LuftfahrtClasses.Vector(480, 400);
            this.velosity = new LuftfahrtClasses.Vector(0, 0);
            this.velosity.random(100, 150);
        }
        move(_timeslice) {
            //console.log("Balloon move");
            let offset = new LuftfahrtClasses.Vector(this.velosity.x, this.velosity.y);
            offset.scale(_timeslice);
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
            }
            else if (this.position.x > 820) {
                this.position.x = 820;
            }
        }
        draw() {
            //console.log("Balloon draw"); // Ballon
            // Ballon
            LuftfahrtClasses.crc2.beginPath();
            LuftfahrtClasses.crc2.arc(this.position.x, this.position.y, 25, 0, Math.PI * 2);
            LuftfahrtClasses.crc2.fillStyle = "orange";
            LuftfahrtClasses.crc2.fill();
            LuftfahrtClasses.crc2.closePath();
            // Seile
            LuftfahrtClasses.crc2.beginPath();
            LuftfahrtClasses.crc2.moveTo(this.position.x - 15, this.position.y + 20);
            LuftfahrtClasses.crc2.lineTo(this.position.x - 5, this.position.y + 45);
            LuftfahrtClasses.crc2.moveTo(this.position.x + 15, this.position.y + 20);
            LuftfahrtClasses.crc2.lineTo(this.position.x + 5, this.position.y + 45);
            LuftfahrtClasses.crc2.strokeStyle = "black";
            LuftfahrtClasses.crc2.lineWidth = 1;
            LuftfahrtClasses.crc2.stroke();
            LuftfahrtClasses.crc2.closePath();
            // Korb
            LuftfahrtClasses.crc2.beginPath();
            LuftfahrtClasses.crc2.rect(this.position.x - 12.5, this.position.y + 45, 25, 20);
            LuftfahrtClasses.crc2.fillStyle = "brown";
            LuftfahrtClasses.crc2.fill();
            LuftfahrtClasses.crc2.closePath();
        }
    }
    LuftfahrtClasses.HotAirBalloon = HotAirBalloon;
})(LuftfahrtClasses || (LuftfahrtClasses = {}));
//# sourceMappingURL=HotAirBalloon.js.map