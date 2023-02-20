let formEl = document.getElementById("task-form")
let taskListEl = document.querySelector(".task-list-el")
let clearTasksEl = document.querySelector(".clear-tasks-el")
let taskInputEl = document.querySelector("#task-el")
let filterInputEl = document.getElementById("filter-el")
let addTaskBtn = document.getElementById("add-task-btn")
let clearTaskBtn = document.getElementById("clear-task-btn")
let filterTaskBtn = document.getElementById("filter-task-btn")


addTaskBtn.addEventListener("click", addTask)

taskListEl.addEventListener("click", deleteTask)

clearTaskBtn.addEventListener("click", deleteAllTasks)

filterInputEl.addEventListener("input", filterTasks)

// Call the tasks stored in LocalStorage whenever the page is reloaded
document.addEventListener("DOMContentLoaded", storeData)

// FUNCTIONS

// Function to add a task
function addTask() {
   
    if (taskInputEl.value === '') {
        emptyInput()
        return;
    }
    // Creating a new Task when Add button is pressed
    const newListItemBox = document.createElement("div")
    const newListItem = document.createElement("li")
    newListItemBox.setAttribute("class", "task-list-item-box")
    newListItem.setAttribute("class", "task-list-item")
    const textNode = document.createTextNode(taskInputEl.value)

    // Creating Delete Icon
    const deleteIcon = document.createElement("a")
    deleteIcon.setAttribute("href", "#")
    deleteIcon.setAttribute("class", "delete-item")
    deleteIcon.innerHTML = '<i class="bi bi-x"></i>'

    // Append the text to the new list item
    newListItem.appendChild(textNode)

    // Append the new list item to new list item box
    newListItemBox.appendChild(newListItem)

    // Append the delete icon to new list item box
    newListItem.appendChild(deleteIcon)

    // Append the new list item to original list
    taskListEl.appendChild(newListItemBox)

    // Clear Input
    taskInputEl.value = ''

}


// Function to delete a task
function deleteTask(event) {
    if (event.target.parentElement.classList.contains("delete-item")) {
       console.log(event.target.parentElement.parentElement.parentElement.remove()) 
    }
}

// Prints error if there is nothing in task input
function emptyInput() {
    if (taskInputEl.value == '') {
        alert("Please add a task!")
        return; // to break out of the function
    }   
    else {
        return;
    }
}

// Function to delete all tasks
function deleteAllTasks() {

    taskListEl.innerHTML = ''
}


// Function to filter/search inside task list
function filterTasks(event) {
    let filterInputContent = event.target.value.toLowerCase() // extracts the value of the filter input bar. (toLowerCase used to stop search bar from being case-sensitive)
    document.querySelectorAll(".task-list-item-box").forEach(function(match){
        const item = match.firstChild.firstChild.textContent
        console.log(match)
        if (item.toLowerCase().indexOf(filterInputContent) == -1) {
            match.style.display = "none"
        }
        else if (item.toLowerCase().indexOf(filterInputContent) > -1) {
            match.style.display = "block"
        }
    })
}

// Function to store data with localStorage()
function storeData() {
    let taskItem;
    if (localStorage.getItem(taskItem) == null) {
        let taskItem = []
    }
    else {
        taskItem = JSON.parse(localStorage.getItem("taskItem"))
    }

    taskItem.push(taskItem)
    localStorage.setItem("taskArray",JSON.stringify(taskArray))
}
