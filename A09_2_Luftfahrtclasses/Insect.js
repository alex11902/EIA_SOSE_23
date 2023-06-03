"use strict";
var LuftfahrtClasses;
(function (LuftfahrtClasses) {
    class Insect {
        position;
        velosity;
        size;
        constructor(_size) {
            //console.log("Insect constructor");
            this.position = new LuftfahrtClasses.Vector(0, 0);
            this.velosity = new LuftfahrtClasses.Vector(0, 0);
            this.velosity.random(100, 200);
            this.size = _size;
        }
        move(_timeslice) {
            // console.log("Insect move");
            let offset = new LuftfahrtClasses.Vector(this.velosity.x, this.velosity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            // wenn position canvas verlässt
            if (this.position.x < 0)
                //addend
                this.position.x += LuftfahrtClasses.crc2.canvas.width;
            if (this.position.y < 0)
                //addend
                this.position.y += LuftfahrtClasses.crc2.canvas.height;
            if (this.position.x > LuftfahrtClasses.crc2.canvas.width)
                //addend
                this.position.x -= LuftfahrtClasses.crc2.canvas.width;
            if (this.position.y > LuftfahrtClasses.crc2.canvas.height)
                //addend
                this.position.y -= LuftfahrtClasses.crc2.canvas.height;
        }
        draw() {
            // console.log("Insect draw");
            let radius = 3;
            LuftfahrtClasses.crc2.save();
            // Körper
            LuftfahrtClasses.crc2.beginPath();
            LuftfahrtClasses.crc2.fillStyle = "red";
            LuftfahrtClasses.crc2.arc(this.position.x, this.position.y, radius, 0, Math.PI * 2);
            LuftfahrtClasses.crc2.fill();
            LuftfahrtClasses.crc2.closePath();
            // Beine
            LuftfahrtClasses.crc2.translate(this.position.x, this.position.y);
            LuftfahrtClasses.crc2.scale(this.size, this.size);
            LuftfahrtClasses.crc2.beginPath();
            LuftfahrtClasses.crc2.strokeStyle = "black";
            LuftfahrtClasses.crc2.moveTo(0, 1);
            LuftfahrtClasses.crc2.lineTo(3, 7);
            LuftfahrtClasses.crc2.moveTo(0, 0);
            LuftfahrtClasses.crc2.lineTo(-3, 7);
            LuftfahrtClasses.crc2.moveTo(0, 0);
            LuftfahrtClasses.crc2.lineTo(1, 2);
            LuftfahrtClasses.crc2.moveTo(0, 0);
            LuftfahrtClasses.crc2.lineTo(-1.5, 2);
            LuftfahrtClasses.crc2.stroke();
            LuftfahrtClasses.crc2.restore();
        }
        ;
    }
    LuftfahrtClasses.Insect = Insect;
})(LuftfahrtClasses || (LuftfahrtClasses = {}));
//# sourceMappingURL=Insect.js.map