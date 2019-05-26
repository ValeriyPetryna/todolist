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
  let btn = document.createElement("BUTTON")
  let deleteSymbol = document.createTextNode("X")
  btn.className = "close"
  btn.appendChild(deleteSymbol)
  li.appendChild(btn)
  btn.onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}
document.body.onkeyup = function(e) {
  if (e.keyCode == 13) {
    newTask()
    
  }
}
let close = document.getElementsByClassName("close")
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement
    div.style.display = "none"
  }
}
function checked() {
  let list = document.querySelector('ul')
  list.addEventListener('click', function(task) {
    if (task.target.tagName === 'LI') {
      task.target.classList.toggle('checked')
    }
  }, false)
}
checked()