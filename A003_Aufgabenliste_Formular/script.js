"use strict";
var Aufgabenliste_datastructure;
(function (Aufgabenliste_datastructure) {
    const inputTask = document.querySelector("#inputTask");
    const inputName = document.querySelector("#inputPerson");
    const inputDate = document.querySelector("#inputDate");
    const inputInfo = document.querySelector("#inputInfo");
    const addTaskBtn = document.querySelector("#addTaskBtn");
    const inputs = document.querySelectorAll("input");
    // Überprüft, ob es bereits daten im speicher gibt
    if (localStorage.getItem("tasks")) {
        const savedTasks = JSON.parse(localStorage.getItem("tasks"));
        // durchläuft jede aufgabe
        savedTasks.forEach(function (task) {
            addTaskToList(task.task, task.name, task.date, task.info);
        });
    }
    addTaskBtn.addEventListener('click', function () {
        addTask();
    });
    function addTask() {
        const task = inputTask.value;
        const name = inputName.value;
        const date = inputDate.value;
        const info = inputInfo.value;
        const taskObj = {
            task: task,
            name: name,
            date: date,
            info: info
        };
        addTaskToList(task, name, date, info);
        // Speichert die aufgabe im lokalen speicher
        if (localStorage.getItem("tasks")) {
            const savedTasks = JSON.parse(localStorage.getItem("tasks"));
            savedTasks.push(taskObj);
            localStorage.setItem("tasks", JSON.stringify(savedTasks));
        }
        else {
            localStorage.setItem("tasks", JSON.stringify([taskObj]));
        }
        clearInput();
    }
    function addTaskToList(task, name, date, info) {
        const Task = document.createElement("li");
        const taskElem = document.createElement("h1");
        taskElem.innerHTML = task;
        const nameElem = document.createElement("p");
        nameElem.innerHTML = name;
        const dateElem = document.createElement("p");
        dateElem.innerHTML = date;
        const infoElem = document.createElement("p");
        infoElem.innerHTML = info;
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "delete";
        deleteBtn.addEventListener('click', function () {
            deleteTask(Task);
        });
        document.querySelector("#TaskList").appendChild(Task);
        Task.appendChild(taskElem);
        Task.appendChild(nameElem);
        Task.appendChild(dateElem);
        Task.appendChild(infoElem);
        Task.appendChild(deleteBtn);
    }
    function clearInput() {
        inputs.forEach(function (input) {
            input.value = "";
        });
    }
    function deleteTask(Task) {
        //löscht die daten aus dem array
        const savedTasks = JSON.parse(localStorage.getItem("tasks"));
        const taskIndex = Array.from(Task.parentNode.children).indexOf(Task);
        savedTasks.splice(taskIndex, 1);
        localStorage.setItem("tasks", JSON.stringify(savedTasks));
        Task.remove();
    }
})(Aufgabenliste_datastructure || (Aufgabenliste_datastructure = {}));
//# sourceMappingURL=script.js.map