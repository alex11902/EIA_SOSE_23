

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
}