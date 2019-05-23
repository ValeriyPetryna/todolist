function newTask() {
  let li = document.createElement("li")
  let inputValue = document.getElementById("createTask").value
  let task = document.createTextNode(inputValue)
  li.appendChild(task)

    if (inputValue === '') {
        alert("Task is clear!")
    } else {
        document.getElementById("tasks").appendChild(li)
      }
  document.getElementById("createTask").value = ""
}