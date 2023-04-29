"use strict";
/*
Aufgabe: <L02_EventInspector>
Name: <Alexander Holstein>
Matrikel: <271466>
Datum: <30.03.2023>
Quellen: <Lara Halmosi,inspiriert von Medin Flaig  >
*/
var household;
(function (household) {
    window.addEventListener("load", handleLoad);
    let task = (document.querySelector("#typetask"));
    let date = (document.querySelector("#choosedate"));
    let person = (document.querySelector("#typename"));
    let comment = (document.querySelector("#typecomment"));
    function handleLoad() {
        task = document.querySelector("#typetask");
        date = document.querySelector("#choosedate");
        person = document.querySelector("#typename");
        comment = document.querySelector("#typecomment");
        let addbutton = document.querySelector("#add");
        //let editbutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#edit");
        let deletebutton = document.querySelector("#delete");
        household.generateTasks();
        addbutton.addEventListener("click", handleButtonadd);
        //editbutton.addEventListener("click",handleButtonedit);
        deletebutton.addEventListener("click", deleteTask);
    }
    function handleButtonadd() {
        let taskadd = task.value;
        console.log(taskadd);
        let dateadd = date.value;
        console.log(dateadd);
        let personadd = person.value;
        console.log(comment);
        let commentadd = comment.value;
        let newTASK = {
            task: taskadd,
            datetime: dateadd,
            person: personadd,
            comment: commentadd,
            status: false,
        };
        household.data.moretasks.push(newTASK);
        console.log("add new task");
        household.generateTasks();
    }
    ;
    function deleteTask() {
        let deleteButton = task.querySelector("#delete");
        if (deleteButton) {
            deleteButton.addEventListener("click", function () {
                task.remove();
            });
            console.log(handleButtonadd);
        }
    }
    /*  function handleButtonedit(): void {
       console.log("edit task");
     } */
    /*function handleChange(_event: Event) {}
    function checkedTask(): void {}
    function deleteTask(): void {}
    function timeUp(): void {}
  */
})(household || (household = {}));
//# sourceMappingURL=managetasks.js.map