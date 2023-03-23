namespace zufallsgedicht {

    // initialisierung von arrays von strings
    let subjects: string[];
    let predicates: string[];
    let objects: string[];

    subjects = ["Harry", "Hermine", "Hagrid", "Tom Riddle", "Snape", "Dumbledore"];
    predicates = ["hasst", " liebt", "verzaubert", "studiert", "bewundert", "zerstoert"];
    objects = ["Zaubertraenke", "deine Mom", "Dementoren", "den Zeitumkehrer", "das Spaghettimonster", "seinen Vater"];


    console.log(subjects, predicates, objects);

    //sooo jetzt iterieren wir durch eine schleife

    for (let index: number = subjects.length; index >= 0; index--) {

        console.log(subjects, objects, predicates);

    }

    function getVerse(_subjects: string[], _predicates: string[], _objects: string[]) {

        console.log();

    }









}