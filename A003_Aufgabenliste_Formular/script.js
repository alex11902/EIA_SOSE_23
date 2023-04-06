"use strict";
function addItem() {
    var input = document.getElementById("new-item");
    var list = document.getElementById("my-list");
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
//# sourceMappingURL=script.js.map