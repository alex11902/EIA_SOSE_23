"use strict";
var zufallsgedicht;
(function (zufallsgedicht) {
    // initialisierung von arrays von strings
    let subjects;
    let predicates;
    let objects;
    subjects = ["Harry", "Hermine", "Hagrid", "Tom Riddle", "Snape", "Dumbledore"];
    predicates = ["hasst", " liebt", "verzaubert", "studiert", "bewundert", "zerstoert"];
    objects = ["Zaubertraenke", "deine Mom", "Dementoren", "den Zeitumkehrer", "das Spaghettimonster", "seinen Vater"];
    console.log(subjects, predicates, objects);
    //sooo jetzt iterieren wir durch eine schleife
    for (let index = subjects.length; index >= 2; index--) {
        console.log(getVerse(subjects, predicates, objects));
    }
    function getVerse(_subjects, _predicates, _objects) {
        let verse = "";
        let verseZahl;
        verseZahl = Math.floor(Math.random() * _subjects.length);
        let versSubjekt = _subjects.splice(verseZahl, 1);
        verseZahl = Math.floor(Math.random() * _predicates.length);
        let versPredikat = _predicates.splice(verseZahl, 1);
        verseZahl = Math.floor(Math.random() * _objects.length);
        let versObjekt = _objects.splice(verseZahl, 1);
        verse = versSubjekt + " " + versPredikat + " " + versObjekt;
        return verse;
    }
})(zufallsgedicht || (zufallsgedicht = {}));
//# sourceMappingURL=zufallsgedicht.js.map