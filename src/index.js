document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const TaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description")

  TaskForm.addEventListener("submit", function (event) {
    event.preventDefault()
    const description = event.target["new-task-description"]
    const newTask = document.createElement("li")
    newTask.innerText = description.value
    // appendNewTask()
    ul = document.querySelector("#tasks")
    ul.appendChild(newTask)
    event.target.reset()
  })

});

