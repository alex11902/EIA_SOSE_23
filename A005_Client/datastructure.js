"use strict";
/*
Aufgabe: <L04_Datastructures>
Name: <Alexander Holstein>
Matrikel: <271466>
Datum: <22.04.2023>
Quellen: <Lara Halmosi,inspiriert von Theresa Hauser>
*/
var household;
(function (household) {
    async function handleData() {
        console.log("async");
        let response = await fetch("data.json");
        let task = await response.text();
        household.data = JSON.parse(task);
        household.generateTasks();
    }
    household.handleData = handleData;
})(household || (household = {}));
//# sourceMappingURL=datastructure.js.map