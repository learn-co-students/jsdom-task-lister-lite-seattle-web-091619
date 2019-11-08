document.addEventListener("DOMContentLoaded", () => {
  createNewTask()
});

function createNewTask(){
  let taskForm = document.getElementById("create-task-form")
  taskForm.addEventListener('submit', (ev)=>{
    ev.preventDefault()
    displayTasks()
  })
}

function displayTasks(){
  let listUl = document.getElementById("tasks")
  let input = document.getElementById("new-task-description")
  let inputData = input.value
  let listLi = document.createElement("Li")
  listLi.textContent = inputData
  listUl.appendChild(listLi)

}