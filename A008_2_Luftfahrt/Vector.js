"use strict";
var LuftfahrtPolymorphie;
(function (LuftfahrtPolymorphie) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        scaleReturn(_factor) {
            this.x *= _factor;
            this.y *= _factor;
            return this;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        addReturn(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
            return this;
        }
        random(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
        subtract(_vector) {
            return new Vector(this.x - _vector.x, this.y - _vector.y);
        }
        copy() {
            return new Vector(this.x, this.y);
        }
    }
    LuftfahrtPolymorphie.Vector = Vector;
})(LuftfahrtPolymorphie || (LuftfahrtPolymorphie = {}));
//# sourceMappingURL=Vector.js.map