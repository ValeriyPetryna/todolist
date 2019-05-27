function newTask() {
  const li = document.createElement("li")
  const inputValue = document.getElementById("createTask").value
  const task = document.createTextNode(inputValue)
  li.appendChild(task)

  if (inputValue === '') {
      alert("Task is empty!")
    } else {
      document.getElementById("tasks").appendChild(li)
  }
 
  document.getElementById("createTask").value = ""
  const btn = document.createElement("BUTTON")
  const deleteSymbol = document.createTextNode("X")
  btn.className = "close"
  btn.appendChild(deleteSymbol)
  li.appendChild(btn)
  btn.onclick = function() {
    const div = this.parentElement
    div.style.display = "none"
  }
}
document.body.onkeyup = function(e) {
  if (e.keyCode == 13) {
    newTask()
  }
}
const close = document.getElementsByClassName("close")
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    const div = this.parentElement
    div.style.display = "none"
  }
}
function markAsDone() {
  const list = document.querySelector('ul')
  list.addEventListener('click', function(task) {
    if (task.target.tagName === 'LI') {
      task.target.classList.toggle('markAsDone')
    }
  }, false)
}
markAsDone()

/* Search-task feature logic can be like this : 
==> push all task to array,
function newTask(text) { 
  allTasks.push(text) 
}
==> filter this tasks,
function searchTask(text) { 
  displayedTasks = allTasks.filter('search filter') 
}
==> and render to page filtered tasks,
function renderToPage() {
  filteredTasks.forEach('render to page here')
}*/

