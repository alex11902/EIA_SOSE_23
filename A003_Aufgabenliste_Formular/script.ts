

function addItem():void {
    var input: HTMLInputElement = <HTMLInputElement>document.getElementById("new-item");
    var list: HTMLElement = <HTMLElement> document.getElementById("my-list");
    var item = document.createElement("li");
    var label = document.createElement("label");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(input.value));
    item.appendChild(label);
    list.appendChild(item);
    input.value = "";
  }