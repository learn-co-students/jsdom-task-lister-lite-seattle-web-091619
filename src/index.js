document.addEventListener("DOMContentLoaded", () => {
  // your code here
  setUpForm();
});

function setUpForm(){
  let taskForm = document.getElementById('create-task-form');
  let button = document.getElementById('task-button');
  let input = document.getElementById('new-task-description');
  let taskList = document.getElementById('list');
  taskForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    let text = input.value;
    input.value = '';
    let li = document.createElement('li');
    li.textContent = text;
    taskList.appendChild(li);
  });
}
