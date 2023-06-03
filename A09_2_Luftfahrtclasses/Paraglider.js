"use strict";
var LuftfahrtClasses;
(function (LuftfahrtClasses) {
    class Paraglider {
        position;
        velosity;
        size;
        constructor(_size) {
            // console.log("Paraglider constructor");
            this.position = new LuftfahrtClasses.Vector(0, 0);
            this.velosity = new LuftfahrtClasses.Vector(0, 0);
            this.velosity.random(100, 200);
            this.size = _size;
        }
        move(_timeslice) {
            // console.log("Paraglider move");
            let Startpoint = new LuftfahrtClasses.Vector(this.velosity.x, this.velosity.y);
            let Endpoint = new LuftfahrtClasses.Vector(this.velosity.x, this.velosity.y);
            Startpoint.scale(_timeslice);
            this.position.add(Startpoint);
        }
        draw() {
            //console.log("Paraglider draw");
            // Paraglider
            LuftfahrtClasses.crc2.beginPath();
            LuftfahrtClasses.crc2.arc(this.position.x, this.position.y, 15, Math.PI, Math.PI * 2);
            LuftfahrtClasses.crc2.fillStyle = "blue";
            LuftfahrtClasses.crc2.fill();
            LuftfahrtClasses.crc2.closePath();
            // Seile
            LuftfahrtClasses.crc2.beginPath();
            LuftfahrtClasses.crc2.moveTo(this.position.x - 15, this.position.y);
            LuftfahrtClasses.crc2.lineTo(this.position.x - 5, this.position.y + 40);
            LuftfahrtClasses.crc2.moveTo(this.position.x + 15, this.position.y);
            LuftfahrtClasses.crc2.lineTo(this.position.x + 5, this.position.y + 40);
            LuftfahrtClasses.crc2.strokeStyle = "black";
            LuftfahrtClasses.crc2.lineWidth = 1;
            LuftfahrtClasses.crc2.stroke();
            LuftfahrtClasses.crc2.closePath();
            // Körper
            LuftfahrtClasses.crc2.beginPath();
            LuftfahrtClasses.crc2.rect(this.position.x - 5, this.position.y + 20, 10, 30);
            LuftfahrtClasses.crc2.fillStyle = "yellow";
            LuftfahrtClasses.crc2.fill();
            LuftfahrtClasses.crc2.closePath();
        }
    }
    LuftfahrtClasses.Paraglider = Paraglider;
})(LuftfahrtClasses || (LuftfahrtClasses = {}));
//# sourceMappingURL=Paraglider.js.map