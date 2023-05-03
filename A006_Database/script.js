"use strict";
var L05_Client;
(function (L05_Client) {
    console.log('Hallo');
    /*
      Aufgabe: <Aufgabe 5 Client>
      Name: <Alexander Holstein>
      Matrikel: <271466>
      Datum: <29.04.23>
      Quellen: <Judith Pauler, Madeleine Hansen>
      */
    let taskArray1 = [];
    let form = document.querySelector('#form');
    ;
    function getData() {
        let taskArray;
        let formData = new FormData(form);
        console.log(formData);
        let p0 = formData.get('taskname');
        let p1 = formData.get('date');
        let p2 = formData.get('comment');
        let p3 = formData.get('Person');
        let p4 = formData.get('box');
        taskArray = [p0, p1, p2, p3, p4];
        console.log("getData: " + taskArray);
        taskArray1 = taskArray;
        return taskArray1;
    }
    ;
    let newdiv = document.createElement("div");
    newdiv.setAttribute("id", "newtask");
    let newP = document.createElement("p");
    newP.setAttribute("id", "newp");
    let Delete = document.createElement("button");
    Delete.setAttribute("id", "trash");
    Delete.innerHTML = "Delete";
    let edit = document.createElement("button");
    edit.setAttribute("id", "edit");
    edit.innerHTML = "Edit";
    let wrap = document.querySelector("#wrapper");
    let submit = document.querySelector("#add2");
    function handleLoad(_event) {
        submit.addEventListener("click", sendTask);
        setValue("Data.json");
    }
    ;
    window.addEventListener("load", handleLoad);
    async function setValue(_url) {
        let response = await fetch(_url);
        let offer = await response.text();
        let dataTemp = JSON.parse(offer);
        console.log("this" + dataTemp);
        console.log("Response", response);
        console.log("before" + offer);
        document.querySelector("#div1").innerHTML = "Task: " + offer;
    }
    async function sendTask(_event) {
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        await fetch("main.html" + query.toString());
        alert("Task Submited!");
    }
    ;
    document.querySelector("#add").addEventListener("click", function () {
        wrap.style.setProperty("visibility", "visible");
    });
    document.querySelector("#add2").addEventListener("click", function (f) {
        wrap.style.setProperty("visibility", "hidden");
        getData();
        document.getElementById("div1").appendChild(newdiv);
        document.querySelector("#div1").appendChild(newP);
        newP.innerHTML = "Task: " + taskArray1[0] + " | to finish until the " + taskArray1[1] + " | Worked on by " + taskArray1[3] + "  || Comment: " + taskArray1[2] + "     ";
        f.preventDefault();
        newP.appendChild(Delete);
        newP.appendChild(edit);
    });
    edit.addEventListener("click", async function () {
        wrap.style.setProperty("visibility", "visible");
    });
    Delete.addEventListener("click", async function () {
        this.parentNode.parentNode.removeChild(this.parentNode);
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        await fetch("main.html" + query.toString());
    });
})(L05_Client || (L05_Client = {}));
//# sourceMappingURL=script.js.map