//JS for todo-list


const completedCount = document.querySelector("#completedCount"); //p tag
const inputTodo = document.querySelector("#inputTodo"); //label
const addBtn = document.querySelector("#addBtn"); //button
const infoText = document.querySelector("#infoText"); //small text
const todoList = document.querySelector("#todoList"); // ul list
let todoText = "";
let completed = 0;
const allTheTodos = [];

addBtn.addEventListener("click", addTodo);

function addTodo(){
//things that will happen when clicking add button

todoText = inputTodo.value;
infoText.textContent = "";
if(todoText.length == 0){
   infoText.textContent = "Du kan inte ha tomma ToDo's i en ToDo lista"
   return;
}

//add the todo to the todo-array
allTheTodos.push(todoText)

const item = document.createElement('li');
todoList.appendChild(item);

const itemText = document.createElement('span');
itemText.innerText = todoText;

// add eventlistner to span with text
itemText.addEventListener("click",

    function(){
        if(item.classList.contains("completed"))
        {
            item.setAttribute('class', "");
            completed--;
            completedCount.textContent = "Du har " + completed + " avklarade ToDo's."

        }
            
        else 
        {
            item.setAttribute('class', "completed");
            completed++;
            completedCount.textContent = "Du har " + completed + " avklarade ToDo's."
        }


    }
)


item.appendChild(itemText);


//empty input
inputTodo.value = "";
}

