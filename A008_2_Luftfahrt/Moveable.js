"use strict";
var LuftfahrtPolymorphie;
(function (LuftfahrtPolymorphie) {
    class Moveable {
        position;
        velosity;
        constructor(_position) {
            //console.log("Moveable constructor");
            if (_position)
                this.position = _position.copy();
            else
                this.position = new LuftfahrtPolymorphie.Vector(0, 0);
            //min, max lenght festlegen
            this.velosity = new LuftfahrtPolymorphie.Vector(0, 0);
        }
        move(_timeslice) {
            //console.log("Moveable move");
            //Verschiebung
            let offset = this.velosity.copy();
            //offset.x += wind; 
            offset.scale(_timeslice);
            this.position.add(offset);
            // wenn position canvas verlässt
            if (this.position.x < 0)
                //addend
                this.position.x += LuftfahrtPolymorphie.crc2.canvas.width;
            if (this.position.y < 0)
                //addend
                this.position.y += LuftfahrtPolymorphie.crc2.canvas.height;
            if (this.position.x > LuftfahrtPolymorphie.crc2.canvas.width)
                //addend
                this.position.x -= LuftfahrtPolymorphie.crc2.canvas.width;
            if (this.position.y > LuftfahrtPolymorphie.crc2.canvas.height)
                //addend
                this.position.y -= LuftfahrtPolymorphie.crc2.canvas.height;
        }
        draw() {
            console.log("Moveable draw");
        }
    }
    LuftfahrtPolymorphie.Moveable = Moveable;
})(LuftfahrtPolymorphie || (LuftfahrtPolymorphie = {}));
//# sourceMappingURL=Moveable.js.map