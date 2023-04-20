/*
Aufgabe: L03_Aufgabenliste_DAtenstruktur
Name: Alexander Holstein
Matrikel: 271466
Datum: 15.04.2023
Quellen: Lars Riehle, W3Schools;
*/;

namespace Aufgabenliste_datastructure {

<<<<<<< HEAD
function addItem() {
  var input: HTMLInputElement = <HTMLInputElement>document.getElementById("new-item");
  var list: HTMLElement = <HTMLElement>document.getElementById("my-list");
  var item = document.createElement("li");
  var label = document.createElement("label");
  var checkbox = document.createElement("input");
  var delButton = document.createElement("button");
  var textItems = document.createElement("h6");

  checkbox.type = "checkbox";
  checkbox.value = "hallo";
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(input.value));
  item.appendChild(label);
  list.appendChild(item);
  textItems.appendChild(label);
  label.appendChild(delButton);
  input.value = "";

}

window.addEventListener("load", finishedLoading);

function finishedLoading(): void {

  let infoText = "Die website hat geladen";
  console.log(infoText);
  let checkBox: HTMLInputElement = <HTMLInputElement>document.querySelector("input");
  let addItemButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#addItemButton");

  checkBox.addEventListener("click", checkBoxWurdeGeklickt);
  addItemButton.addEventListener("click", textboxwurdeangeklickt);

}

function checkBoxWurdeGeklickt(): void {

  console.log("input wurde getriggert (checkbox)");

}

function textboxwurdeangeklickt(): void {

  console.log("du befindest dich im textfeld");
=======


  const inputTask = document.querySelector("#inputTask") as HTMLInputElement;
  const inputName = document.querySelector("#inputPerson") as HTMLSelectElement;
  const inputDate = document.querySelector("#inputDate") as HTMLInputElement;
  const inputInfo = document.querySelector("#inputInfo") as HTMLInputElement;
  const addTaskBtn = document.querySelector("#addTaskBtn") as HTMLButtonElement;

  const inputs = document.querySelectorAll("input");

  // Überprüft, ob es bereits daten im speicher gibt
  if (localStorage.getItem("tasks")) {
    const savedTasks = JSON.parse(localStorage.getItem("tasks") as string);
    // durchläuft jede aufgabe
    savedTasks.forEach(function (task: any) {
      addTaskToList(task.task, task.name, task.date, task.info);
    });
  }

  addTaskBtn.addEventListener('click', function () {
    addTask();
  })

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
      const savedTasks = JSON.parse(localStorage.getItem("tasks") as string);
      savedTasks.push(taskObj);
      localStorage.setItem("tasks", JSON.stringify(savedTasks));
    } else {
      localStorage.setItem("tasks", JSON.stringify([taskObj]));
    }

    clearInput();
  }

  function addTaskToList(task: string, name: string, date: string, info: string) {
    const Task: HTMLLIElement = document.createElement("li");
    const taskElem = document.createElement("h1");
    taskElem.innerHTML = task;
    const nameElem: HTMLParagraphElement = document.createElement("p");
    nameElem.innerHTML = name;
    const dateElem: HTMLParagraphElement = document.createElement("p");
    dateElem.innerHTML = date;
    const infoElem: HTMLParagraphElement = document.createElement("p");
    infoElem.innerHTML = info;
    const deleteBtn: HTMLButtonElement = document.createElement("button");
    deleteBtn.innerHTML = "delete";
    deleteBtn.addEventListener('click', function () {
      deleteTask(Task);
    })

    document.querySelector("#TaskList")!.appendChild(Task);

    Task.appendChild(taskElem);
    Task.appendChild(nameElem);
    Task.appendChild(dateElem);
    Task.appendChild(infoElem);
    Task.appendChild(deleteBtn);
  }

  function clearInput() {
    inputs.forEach(function (input: HTMLInputElement) {
      input.value = "";
    })
  }

  function deleteTask(Task: HTMLLIElement) {
    //löscht die daten aus dem array
    const savedTasks = JSON.parse(localStorage.getItem("tasks") as string);
    const taskIndex = Array.from(Task.parentNode!.children).indexOf(Task);
    savedTasks.splice(taskIndex, 1);
    localStorage.setItem("tasks", JSON.stringify(savedTasks));

    Task.remove();
  }

>>>>>>> 4b5660bb69117ebefe674c5b63f3111ac300a90a
}