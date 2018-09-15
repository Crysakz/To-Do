let button = document.getElementById("enter");
let input = document.getElementById("user-input");
let ul = document.querySelector("ul");
let htmlList = document.querySelectorAll("li");

//Goes through pre-added list, to append Delete buttons
for (let i = 0; i < htmlList.length; i++) {
    let deleteButtonOld = document.createElement("button");

    deleteButtonOld.classList = "delete";
    deleteButtonOld.appendChild(document.createTextNode("Delete"));
    htmlList[i].appendChild(deleteButtonOld);
}


function appendList() { 
    let deleteButton = document.createElement("button");
    let li = document.createElement("li");
    deleteButton.classList = "delete";

        li.appendChild(document.createTextNode(input.value));
        deleteButton.appendChild(document.createTextNode("Delete"));

        li.appendChild(deleteButton);
        ul.appendChild(li);

        input.value = '';
}

function addListAfterClick() {
    if (input.value !== '') {
       appendList();
    }
}

function addListAfterKeyPress(event) {
    if (input.value !== '' && event.key === 'Enter') {
        appendList();
     }
}



button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);
ul.addEventListener("click", function (event) {
    let target = event.target;

    if (target.tagName === "LI") {
        target.classList.toggle('done');
    } else if (target.tagName === "BUTTON") {
        target.parentElement.parentElement.removeChild(target.parentElement);
    }
    
})