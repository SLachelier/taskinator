var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    //validates if all forms are filled out
    if(!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }
    //resets the form after each entry
    formEl.reset();
    //creates a list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    //creates a div to hold task info and add it to the list item
    var taskInfoEl = document.createElement("div");
    //gives the div a class name
    taskInfoEl.className = "task-info";

    //adds the HTML content to the div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemEl.appendChild(taskInfoEl);
    //add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);