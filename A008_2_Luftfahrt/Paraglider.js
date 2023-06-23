"use strict";
var LuftfahrtPolymorphie;
(function (LuftfahrtPolymorphie) {
    class Paraglider extends LuftfahrtPolymorphie.Moveable {
        position;
        velosity;
        size;
        activity;
        constructor() {
            // console.log("Paraglider constructor");
            super();
            this.position = new LuftfahrtPolymorphie.Vector(0, 0);
            this.velosity = new LuftfahrtPolymorphie.Vector(0, 0);
            this.velosity.random(100, 200);
            this.activity = "walk";
        }
        move(_timeslice) {
            // console.log("Paraglider move");
            // fly
            if (this.activity == "fly") {
                let offset = new LuftfahrtPolymorphie.Vector(this.velosity.x, this.velosity.y);
                offset.scale(_timeslice);
                this.position.add(offset);
                if (this.position.y > 120, this.position.x > 320) {
                    this.activity = "walk";
                    this.velosity.set(-50, 0);
                }
            }
            if (this.activity == "walk") {
                let offset = new LuftfahrtPolymorphie.Vector(this.velosity.x, this.velosity.y);
                offset.scale(_timeslice);
                this.position.add(offset);
                if (this.position.x <= 50) {
                    this.activity = "climb";
                    this.velosity.set(0, -50);
                }
            }
            if (this.activity == "climb") {
                let offset = new LuftfahrtPolymorphie.Vector(this.velosity.x, this.velosity.y);
                offset.scale(_timeslice);
                this.position.add(offset);
                if (this.position.y <= 50) {
                    this.activity = "fly";
                    this.velosity.set(100, 40);
                }
            }
        }
        draw() {
            //console.log("Paraglider draw");
            LuftfahrtPolymorphie.crc2.save();
            LuftfahrtPolymorphie.crc2.translate(this.position.x, this.position.y);
            if (this.activity == "fly") {
                // Paraglider
                LuftfahrtPolymorphie.crc2.beginPath();
                LuftfahrtPolymorphie.crc2.arc(this.position.x, this.position.y, 15, Math.PI, Math.PI * 2);
                LuftfahrtPolymorphie.crc2.fillStyle = "White";
                LuftfahrtPolymorphie.crc2.fill();
                LuftfahrtPolymorphie.crc2.closePath();
                // Seile
                LuftfahrtPolymorphie.crc2.beginPath();
                LuftfahrtPolymorphie.crc2.moveTo(this.position.x - 15, this.position.y);
                LuftfahrtPolymorphie.crc2.lineTo(this.position.x - 5, this.position.y + 40);
                LuftfahrtPolymorphie.crc2.moveTo(this.position.x + 15, this.position.y);
                LuftfahrtPolymorphie.crc2.lineTo(this.position.x + 5, this.position.y + 40);
                LuftfahrtPolymorphie.crc2.strokeStyle = "black";
                LuftfahrtPolymorphie.crc2.lineWidth = 1;
                LuftfahrtPolymorphie.crc2.stroke();
                LuftfahrtPolymorphie.crc2.closePath();
                // Körper
                LuftfahrtPolymorphie.crc2.beginPath();
                LuftfahrtPolymorphie.crc2.rect(this.position.x - 5, this.position.y + 20, 10, 30);
                LuftfahrtPolymorphie.crc2.fillStyle = "blue";
                LuftfahrtPolymorphie.crc2.fill();
                LuftfahrtPolymorphie.crc2.closePath();
                LuftfahrtPolymorphie.crc2.restore();
            }
            else {
                // Wanderer
                // Körper
                LuftfahrtPolymorphie.crc2.beginPath();
                LuftfahrtPolymorphie.crc2.rect(this.position.x - 5, this.position.y + 20, 10, 30);
                LuftfahrtPolymorphie.crc2.fillStyle = "white";
                LuftfahrtPolymorphie.crc2.fill();
                LuftfahrtPolymorphie.crc2.closePath();
                LuftfahrtPolymorphie.crc2.restore();
            }
        }
    }
    LuftfahrtPolymorphie.Paraglider = Paraglider;
})(LuftfahrtPolymorphie || (LuftfahrtPolymorphie = {}));
//# sourceMappingURL=Paraglider.js.map