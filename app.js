var item = document.getElementById("item");



function addtodo(){
    var todo_item = document.getElementById("todo-item")
    
   


    // CREATED LI TAG WITH TEXT NODE 
    var li = document.createElement("li")

    var liText = document.createTextNode(todo_item.value)

    li.appendChild(liText)

// ------------------------------------------------------
    // CREATED DELETE BUTTON 
var delBtn = document.createElement("button")
var delText = document.createTextNode("DELETE")
 
delBtn.setAttribute("class","btn")

delBtn.setAttribute("onclick","deleteItem(this)")

delBtn.appendChild(delText)
// --------------------------------------------------------

// CREATED EDIT BUTTON

var editBtn = document.createElement("button")
var editText = document.createTextNode("EDIT")

editBtn.setAttribute("class","btn1")



editBtn.setAttribute("onclick","editItem(this)")

editBtn.appendChild(editText)

// ---------------------------------------

  li.appendChild(delBtn)
  li.appendChild(editBtn)
      list.appendChild(li)

      todo_item.value = "" 

    console.log(li)

}
function deleteItem(e){

 e.parentNode.remove()
}

function editItem(e){

  var val = e.parentNode.firstChild.nodeValue;
  var editValue = prompt("ENTER THE VALUE TO EDIT",val) 

  e.parentNode.firstChild.nodeValue = editValue
}

function deleteAll()
{
     list.innerHTML = ""
}