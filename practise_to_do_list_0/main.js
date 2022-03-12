//  learn-webdev
//  To Do List| Js beginner project tutorial

let addToDo = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

addToDo.addEventListener("click", function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add("paragraph-styling");
    
    //  Adding an element to the list
    paragraph.innerHTML = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    
    //  Strike through on single click
    paragraph.addEventListener("click", function(){
        paragraph.style.textDecoration = "line-through";
    })

    //  Remove item on double-click
    paragraph.addEventListener("dblclick", function(){
        toDoContainer.removeChild(paragraph);
    })

})

