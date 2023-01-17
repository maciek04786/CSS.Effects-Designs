
// creating all variable first that I need -->
var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul")
var deleteBtns = document.getElementsByClassName("delete");
var items = ul.getElementsByTagName("li");
var checkingbox = document.getElementsByClassName("myCheck");


// to send the selected item to removeParent function after we click on it -->
function deleteItem() {
    for (let i = 0; i < deleteBtns.length; i++) {
        deleteBtns[i].addEventListener("click", removeParent, false);
    }
}


// to delete the item from the list -->
function removeParent(evt) {
    evt.target.parentNode.parentNode.parentNode.remove();
}


// change color alternatively when we click on checkbox -->
function checking() {
    for (let a = 0; a < items.length; a++) {
        if (checkingbox[a].checked == true) {
            items[a].style.backgroundColor = "#3eb4e7ba";
        }
        else if (checkingbox[a].checked == false) {
            items[a].style.backgroundColor = "#85858575";
        }
    }
}



// adding new items:
function inputLength() {
    return input.value.length;
}


// creating item list and features -->
function createListElement() {
    // checkbox
    var checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "myCheck");
    checkbox.onclick = lastCheck();

    // delete button
    var btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.classList.add("delete")
    btn.onclick = deleteItem();

    // getting inner value from input tag
    var innertext = document.createTextNode(input.value)

    // connecting all tags
    var outerdiv = document.createElement("div");
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    outerdiv.classList.add("mid");
    outerdiv.appendChild(div1);
    outerdiv.appendChild(div2);
    div1.appendChild(checkbox);
    div1.appendChild(innertext);
    div2.appendChild(btn);
    // btn.onclick = deleteItem();

    var li = document.createElement("li");
    li.appendChild(outerdiv);
    li.innerHTML = li.innerHTML + " ";

    // connecting li to ul element and null input value
    ul.appendChild(li);
    input.value = "";

    deleteItem();
}


// when user add items by clicking on button -->
function addToListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}


// when user add items by pressing keyword -->
function addToListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}


// creating event listener for button, input and checkbox -->
button.addEventListener("click", addToListAfterClick);

input.addEventListener("keypress", addToListAfterKeypress);

function lastCheck() {
    for (let l = 0; l < checkingbox.length; l++) {
        checkingbox[l].addEventListener("click", checking);
    }
}