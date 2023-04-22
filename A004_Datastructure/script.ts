/*
Aufgabe: L03_Aufgabenliste_DAtenstruktur
Name: Alexander Holstein
Matrikel: 271466
Datum: 15.04.2023
Quellen: Lars Riehle, W3Schools;
*/

namespace Aufgabenliste_datastructure {



    const inputTask = document.querySelector("#inputTask") as HTMLInputElement;
    const inputName = document.querySelector("#inputPerson") as HTMLSelectElement;
    const inputDate = document.querySelector("#inputDate") as HTMLInputElement;
    const inputInfo = document.querySelector("#inputInfo") as HTMLInputElement;
    const addTaskBtn = document.querySelector("#addTaskBtn") as HTMLButtonElement;
  
    const inputs = document.querySelectorAll("input");
  
    // Überprüft, ob es bereits daten im speicher gibt
    // if (localStorage.getItem("tasks")) {
    //   const savedTasks = JSON.parse(localStorage.getItem("tasks") as string);
    //   // durchläuft jede aufgabe
    //   savedTasks.forEach(function (task: any) {
    //     addTaskToList(task.task, task.name, task.date, task.info);
    //   });
    // }
  
    addTaskBtn.addEventListener('click', function () {
      addTask();
    })
  
    function addTask() {
      const task = inputTask.value;
      const name = inputName.value;
      const date = inputDate.value;
      const info = inputInfo.value;
  
  
  
      const taskObj: Task = {
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
      // const savedTasks = JSON.parse(localStorage.getItem("tasks") as string);
      // const taskIndex = Array.from(Task.parentNode!.children).indexOf(Task);
      // savedTasks.splice(taskIndex, 1);
      // localStorage.setItem("tasks", JSON.stringify(savedTasks));
  
      Task.remove();
    }
  
  }