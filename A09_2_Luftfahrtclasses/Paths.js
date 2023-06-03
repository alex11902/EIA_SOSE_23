"use strict";
var LuftfahrtClasses;
(function (LuftfahrtClasses) {
    LuftfahrtClasses.Insects = [];
    LuftfahrtClasses.HotAirBalloons = [];
    LuftfahrtClasses.Paragliders = [];
    function createInsects(numInsects) {
        const maxInsects = 5; // Maximale Anzahl von Insekten im Bild
        for (let i = 0; i < numInsects && LuftfahrtClasses.Insects.length < maxInsects; i++) {
            let insect = new LuftfahrtClasses.Insect();
            LuftfahrtClasses.Insects.push(insect);
        }
    }
    LuftfahrtClasses.createInsects = createInsects;
    function createHotairballoons(numHotairballoons) {
        const maxBalloons = 4; // Maximale Anzahl von Balloons im Bild
        for (let i = 0; i < numHotairballoons && LuftfahrtClasses.Insects.length < maxBalloons; i++) {
            let hotairballoon = new LuftfahrtClasses.HotAirBalloon();
            LuftfahrtClasses.HotAirBalloons.push(hotairballoon);
        }
    }
    LuftfahrtClasses.createHotairballoons = createHotairballoons;
    function createParagliders(numParagliders) {
        const maxBalloons = 4; // Maximale Anzahl von Balloons im Bild
        for (let i = 0; i < numParagliders && LuftfahrtClasses.Paragliders.length < maxBalloons; i++) {
            let paraglider = new LuftfahrtClasses.Paraglider();
            LuftfahrtClasses.HotAirBalloons.push(paraglider);
        }
    }
    LuftfahrtClasses.createParagliders = createParagliders;
})(LuftfahrtClasses || (LuftfahrtClasses = {}));
//# sourceMappingURL=Paths.js.map