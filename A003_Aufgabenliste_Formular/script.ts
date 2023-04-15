/*
Aufgabe: L03_Aufgabenliste_DAtenstruktur
Name: Alexander Holstein
Matrikel: 272305
Datum: 15.04.2023
Quellen: Lars Riehle
*/
const inputTask = document.querySelector("#inputTask") as HTMLInputElement;
const inputName = document.querySelector("#inputPerson") as HTMLSelectElement;
const inputDate = document.querySelector("#inputDate") as HTMLInputElement;
const inputInfo = document.querySelector("#inputInfo") as HTMLInputElement;
const addTaskBtn = document.querySelector("#addTaskBtn") as HTMLButtonElement;

const inputs = document.querySelectorAll("input");

addTaskBtn.addEventListener(`click`, function () {
  addTask();
})

function addTask() {
  let Task: HTMLLIElement = document.createElement("li");
  let task = document.createElement("h1");
  task.innerHTML = inputTask.value;
  let name: HTMLParagraphElement = document.createElement("p");
  name.innerHTML = inputName.value;
  let date: HTMLParagraphElement = document.createElement("p");
  date.innerHTML = inputDate.value;
  let info: HTMLParagraphElement = document.createElement("p");
  info.innerHTML = inputInfo.value;
  let deleteBtn: HTMLButtonElement = document.createElement("button");
  deleteBtn.innerHTML = "delete";
  deleteBtn.addEventListener(`click`, function () {
    deleteTask(Task);
  })

  document.querySelector("#TaskList")!.appendChild(Task);

  Task.appendChild(task);
  Task.appendChild(name);
  Task.appendChild(date);
  Task.appendChild(info);
  Task.appendChild(deleteBtn);

  clearInput();
}

function clearInput() {
  inputs.forEach(function (input: HTMLInputElement) {
    input.value = "";
  })
}

function deleteTask(Task: HTMLLIElement) {
  Task.remove();
}