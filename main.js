const userInput = document.querySelector("#itemInput")
const addBtn = document.querySelector("#addItem")
const itemContainer = document.querySelector("#itemContainer")


function addTask(event){

    if (userInput.value != ""){
        const todoDIV = document.createElement("div")
        todoDIV.classList.add("todo")
        

        const newTodo = document.createElement("li")
        newTodo.innerText = userInput.value
        newTodo.classList.add("todoItem")
        todoDIV.appendChild(newTodo)

        const checkMarkBtn = document.createElement("button")
        checkMarkBtn.innerText = "✓"
        checkMarkBtn.classList.add("completedBtn")
        todoDIV.appendChild(checkMarkBtn)

        const removeBtn = document.createElement("button")
        removeBtn.innerText = "🗑️"
        removeBtn.classList.add("trashBtn")
        todoDIV.appendChild(removeBtn)

        itemContainer.appendChild(todoDIV)
        
    }
    userInput.value = ""
    
}


//Press to submit
addBtn.addEventListener("click", addTask)

//Check if press delete
itemContainer.addEventListener("click", deleteCheck)
//Check if press complete
itemContainer.addEventListener("click", completeCheck)


function deleteCheck(event){
    const item = event.target
    
    if(item.classList[0] == "trashBtn"){
        const todo = item.parentElement
        todo.remove()
    }
}

function completeCheck(event){
    const item = event.target
    let pressCount = 0
    
    if(item.classList[0] == "completedBtn"){
        const todo = item.parentElement
        pressCount += 1
        
        if (pressCount % 2 == 0){
            todo.style.backgroundColor = "white"
        }
        else{    
            todo.style.backgroundColor = "#00ff37"
        }
    }
    
}





