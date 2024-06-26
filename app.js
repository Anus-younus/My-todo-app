let inputEle = document.querySelectorAll('input')[0];

let todoDiv = document.createElement('DIV');

let bodyEle = document.querySelectorAll('body')[0]

bodyEle.insertBefore(todoDiv,bodyEle.childNodes[4])

let errorMsg = document.querySelectorAll(".error")[0]

function add(){
    if(inputEle.value === "" || inputEle.value === " "){
        errorMsg.style.display = "block"
        setTimeout(function (){
            errorMsg.style.display = 'none'
        }, 3000)
    }
    else{
    printAllTodos()
    inputEle.value = ""
   }
}


function printAllTodos(){
    let ptodo = document.createElement('P');
    let textInput = document.createTextNode(inputEle.value)
    let editBtn = document.createElement('BUTTON');
    let deletedBtn = document.createElement('BUTTON');
    editBtn.setAttribute("onclick", "edit(this)")
    deletedBtn.setAttribute("onclick", "deleted(this)")
    let editText = document.createTextNode("Edit")
    let deletedText = document.createTextNode("Deleted")
    let br1 = document.createElement('BR')
    let br2 = document.createElement('BR')
    let space = document.createTextNode(' ')
    ptodo.appendChild(textInput)
    ptodo.appendChild(br1) 
    ptodo.appendChild(br2)
    ptodo.appendChild(editBtn)
    ptodo.appendChild(space)
    ptodo.appendChild(deletedBtn)
    deletedBtn.appendChild(deletedText)
    editBtn.appendChild(editText)
    todoDiv.appendChild(ptodo)
}

function deleted(index){
     todoDiv.removeChild(index.parentElement)
}

let parentTodo = document.querySelectorAll('#parent-todo')[0];

let childTodo = document.querySelectorAll('#child-todo')[0];

let todoInput = document.querySelectorAll('#todo-input')[0];

let getIndex;

function edit(index){
    parentTodo.className += " hide"
    childTodo.className = ""
    if(parentTodo.className === " hide"){
        todoInput.value = index.parentElement.childNodes[0].nodeValue
        getIndex = index
    }
    else{
        errorMsg.style.display = "block"
        setTimeout(function (){
            errorMsg.style.display = 'none'
        }, 3000)
    }
}

function save(){
    let index = document.createTextNode(todoInput.value) 
    let ptodo = getIndex.parentElement
    ptodo.removeChild(getIndex.parentElement.childNodes[0])
    ptodo.insertBefore(index, getIndex.parentElement.childNodes[0])
    parentTodo.className = ""
    childTodo.className += " hide"
}