/*
Aufgabe: <L04_Datastructures>
Name: <Alexander Holstein>
Matrikel: <271466>
Datum: <16.04.2023>
Quellen: <Lara Halmosi,inspiriert von Theresa Hauser>
*/
//* neue Task wird erstellt, bei klick auf den add-Button *//
namespace household {
  export function generateTasks() {
    let taskcollection: HTMLDivElement = <HTMLDivElement>(
      document.querySelector("#summtask")
    );
    taskcollection.innerHTML = "";
    // for-Schleife durchläuft solang, wie länge des arrays
    for (let index = 0; index < data.moretasks.length; index++) {
      //erstellt in HTML Elemente für jeweils eine Aufgabe
      let task: HTMLDivElement = <HTMLDivElement>document.createElement("div");
      task.id="taskelement";
      
      let taskname: HTMLElement = <HTMLElement>document.createElement("p");
      let datetime: HTMLElement = <HTMLElement>document.createElement("p");
      let personname: HTMLElement = <HTMLElement>document.createElement("p");
      let commenttext: HTMLElement = <HTMLElement>document.createElement("p");
      let onedit: HTMLInputElement = <HTMLInputElement>document.createElement("input");
      onedit.type = "radio";
      let textonedit: HTMLElement = <HTMLElement>document.createElement("label");
      textonedit.innerHTML ="in Bearbeitung";
      let done: HTMLInputElement = <HTMLInputElement>document.createElement("input");
      done.type = "radio";
      let textdone: HTMLElement = <HTMLElement>document.createElement("label");
      textdone.innerHTML ="Erledigt";
      let check: HTMLInputElement = <HTMLInputElement>(
        document.createElement("checkbox")
      );
      //generate button in HTML
      let editbutton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
      let editbuttonI: HTMLElement = <HTMLElement>document.createElement("i");

      let deletebutton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
      let deletebuttonI: HTMLElement = <HTMLElement>document.createElement("i");

      editbuttonI.className = "fas fa-edit";
      editbuttonI.id = "edit";

      deletebuttonI.className = "far fa-trash-alt";
      deletebuttonI.id = "delete";

      //task wird taskcollection angehängt
      taskcollection.appendChild(task);
      //Elemente werden task angehängt
      task.appendChild(taskname);
      task.appendChild(datetime);
      task.appendChild(personname);
      task.appendChild(commenttext);
      task.appendChild(onedit);
      task.appendChild(textonedit);
      task.appendChild(done);
      task.appendChild(textdone);
      task.appendChild(check);
      //fügt Werte aus Array in HTML
      taskname.innerHTML = data.moretasks[index].task;
      datetime.innerHTML = data.moretasks[index].datetime;
      personname.innerHTML = data.moretasks[index].person;
      commenttext.innerHTML = data.moretasks[index].comment;
      /* let date = new Date();
      console.log(date); */
      if (data.moretasks[index].status) {
        onedit.checked = true;
      } else {
        done.checked = false;
      }
      //
      check.checked = data.moretasks[index].status;
      task.appendChild(editbutton);
      editbutton.appendChild(editbuttonI);
      task.appendChild(deletebutton);
      deletebutton.appendChild(deletebuttonI);
      
    }
  }

  
}
