namespace zufallsgedicht {

/* Aufgabe: 01-Zufallsgedicht
Name: Alexander Vincent Holstein
Matrikel: 271466
Datum: 25.03.2023
Quellen: -
*/

    // initialisierung von arrays von strings
    let subjects: string[];
    let predicates: string[];
    let objects: string[];

    subjects = ["Harry", "Hermine", "Hagrid", "Tom Riddle", "Snape", "Dumbledore"];
    predicates = ["hasst",  "liebt", "verzaubert", "studiert", "bewundert", "zerstoert"];
    objects = ["Zaubertraenke", "deine Mom", "Dementoren", "den Zeitumkehrer", "das Spaghettimonster", "seinen Vater"];


    console.log(subjects, predicates, objects);

    //schleife wird initialisiert

    for (let index: number = subjects.length; index >=2; index--) {

        console.log(getVerse(subjects, predicates, objects));

    }

    function getVerse(_subjects: string[], _predicates: string[], _objects: string[]): string {

        let verse: string = "";

        let verseZahl: number;

        verseZahl = Math.floor(Math.random() * _subjects.length);
        let versSubjekt: string[] = _subjects.splice(verseZahl, 1);

        verseZahl = Math.floor(Math.random() * _predicates.length);
        let versPredikat: string[] = _predicates.splice(verseZahl, 1);

        verseZahl = Math.floor(Math.random() * _objects.length);
        let versObjekt: string[] = _objects.splice(verseZahl, 1);

        verse = versSubjekt + " " + versPredikat + " " + versObjekt;

        return verse;


    }









}