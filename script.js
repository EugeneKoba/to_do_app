let formEl = document.getElementById("task-form")
let taskListEl = document.querySelector(".task-list-el")
let clearTasksEl = document.querySelector(".clear-tasks-el")
let filterEl = document.getElementById("filter-el")
let taskInputEl = document.querySelector("#task-el")
let addTaskBtn = document.getElementById("add-task-btn")
let filterTaskBtn = document.getElementsByTagName("filter-task-btn")


addTaskBtn.addEventListener("click", addTask)

function addTask() {

    // Prints error if there is nothing in task input
    if (taskInputEl.value === '') {
        alert("Please add a task!")
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
