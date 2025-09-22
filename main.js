//JS for todo-list


const completedCount = document.querySelector("#completedCount"); //p tag
const inputTodo = document.querySelector("#inputTodo"); //label
const addBtn = document.querySelector("#addBtn"); //button
const infoText = document.querySelector("#infoText"); //small text
const todoList = document.querySelector("#todoList"); // ul list
let todoText = ""; //text thats adds in label
let completed = 0;
const theTodoArray = [];

addBtn.addEventListener("click", addTodo);
function changeStatus(todoText, changeStatus){
    
    let findIndex = theTodoArray.map(t => t.name).indexOf(todoText);
    theTodoArray[findIndex].completed = changeStatus;

};

function addTodo(){
//things that will happen when clicking add button

infoText.textContent = "";
todoText = inputTodo.value;

if(todoText.length == 0){
   infoText.textContent = "Du kan inte ha tomma ToDo's i en ToDo lista"
   return;
}

//add the todo to the todo-array 
const todoObject = {name: todoText, completed: false};
theTodoArray.push(todoObject);


const item = document.createElement("li");
todoList.appendChild(item);


//Add todo text as a span on the li
const itemText = document.createElement("span");
itemText.innerText = todoText;

// add eventlistner to span with text
itemText.addEventListener("click",

    function(){
        if(item.classList.contains("completed"))
        {
            item.setAttribute("class", "");
            completed--;
            completedCount.textContent = "Du har " + completed + " avklarade ToDo's."
            changeStatus(itemText.innerText, false)

        }
            
        else 
        {
            item.setAttribute("class", "completed");
            completed++;
            completedCount.textContent = "Du har " + completed + " avklarade ToDo's."
            changeStatus(itemText.innerText, true)
        
        }



    }
)


item.appendChild(itemText);

//Add traschcan as a span on li
const trashcan = document.createElement("span");
trashcan.innerHTML = "&#128465;";
trashcan.classList.add("traschcan");

trashcan.addEventListener("click", function(){
    item.remove();
    let removeText = item.firstChild.textContent;
    let indexToRemove = theTodoArray.map(t => t.name).indexOf(removeText);
    theTodoArray.splice(indexToRemove, 1);
    completed--;
    completedCount.textContent = "Du har " + completed + " avklarade ToDo's."

    
})

item.appendChild(trashcan);

//empty input
inputTodo.value = "";
}

