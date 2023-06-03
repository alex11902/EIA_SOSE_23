"use strict";
var LuftfahrtClasses;
(function (LuftfahrtClasses) {
    class Insect {
        position;
        velosity;
        size;
        constructor(_size) {
            console.log("Insect constructor");
        }
        move(_timeslice) {
            console.log("Insect move");
        }
        draw() {
            console.log("Insect draw");
        }
    }
    LuftfahrtClasses.Insect = Insect;
})(LuftfahrtClasses || (LuftfahrtClasses = {}));
//# sourceMappingURL=Insects.js.map