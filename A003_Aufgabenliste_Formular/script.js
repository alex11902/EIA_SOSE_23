"use strict";
/*
Aufgabe: L03_Aufgabenliste_DAtenstruktur
Name: Alexander Holstein
Matrikel: 272305
Datum: 15.04.2023
Quellen: Lars Riehle
*/
const inputTask = document.querySelector("#inputTask");
const inputName = document.querySelector("#inputPerson");
const inputDate = document.querySelector("#inputDate");
const inputInfo = document.querySelector("#inputInfo");
const addTaskBtn = document.querySelector("#addTaskBtn");
const inputs = document.querySelectorAll("input");
addTaskBtn.addEventListener(`click`, function () {
    addTask();
});
function addTask() {
    let Task = document.createElement("li");
    let task = document.createElement("h1");
    task.innerHTML = inputTask.value;
    let name = document.createElement("p");
    name.innerHTML = inputName.value;
    let date = document.createElement("p");
    date.innerHTML = inputDate.value;
    let info = document.createElement("p");
    info.innerHTML = inputInfo.value;
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "delete";
    deleteBtn.addEventListener(`click`, function () {
        deleteTask(Task);
    });
    document.querySelector("#TaskList").appendChild(Task);
    Task.appendChild(task);
    Task.appendChild(name);
    Task.appendChild(date);
    Task.appendChild(info);
    Task.appendChild(deleteBtn);
    clearInput();
}
function clearInput() {
    inputs.forEach(function (input) {
        input.value = "";
    });
}
function deleteTask(Task) {
    Task.remove();
}
//# sourceMappingURL=script.js.map