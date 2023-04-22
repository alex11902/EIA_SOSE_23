/*
Aufgabe: <L02_EventInspector>
Name: <Alexander Holstein>
Matrikel: <271466>
Datum: <30.03.2023>
Quellen: <Lara Halmosi,inspiriert von Medin Flaig  >
*/
namespace household {
  window.addEventListener("load", handleLoad);

  let task: HTMLInputElement = <HTMLInputElement>(
    document.querySelector("#typetask")
  );
  let date: HTMLInputElement = <HTMLInputElement>(
    document.querySelector("#choosedate")
  );
  let person: HTMLInputElement = <HTMLInputElement>(
    document.querySelector("#typename")
  );
  let comment: HTMLInputElement = <HTMLInputElement>(
    document.querySelector("#typecomment")
  );
  
  function handleLoad(): void {
      task = <HTMLInputElement>document.querySelector("#typetask");
      date = <HTMLInputElement>document.querySelector("#choosedate");
      person = <HTMLInputElement>document.querySelector("#typename");
      comment = <HTMLInputElement>document.querySelector("#typecomment");
      
      let addbutton: HTMLButtonElement = <HTMLButtonElement>(
      document.querySelector("#add")
    );
    //let editbutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#edit");
    let deletebutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#delete");
    generateTasks();
    addbutton.addEventListener("click", handleButtonadd);
    //editbutton.addEventListener("click",handleButtonedit);
    deletebutton.addEventListener("click",deleteTask);
}
function handleButtonadd(): void {
    let taskadd = task.value;
    console.log(taskadd);
    let dateadd = date.value;
    console.log(dateadd);
    let personadd = person.value;
    console.log(comment);
    let commentadd = comment.value;
    
    let newTASK: Task = {
      task: taskadd,
      datetime: dateadd,
      person: personadd,
      comment: commentadd,
      status: false,
    };

    data.moretasks.push(newTASK);

    console.log("add new task");

    generateTasks();
    
  };
  
  function deleteTask(): void {

    let deleteButton = task.querySelector("#delete");
    if (deleteButton) {
        deleteButton.addEventListener("click", function () {
            task.remove();
        });
        console.log(handleButtonadd)
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
}
