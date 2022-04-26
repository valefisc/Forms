
    let toDos = [];
document.querySelector('#NewTodo').addEventListener("submit", function(event){
    event.preventDefault();
    let value = document.querySelector('#ToDoField').value;
    console.log(value);
    toDos.push(value);
    console.log(toDos);
    ToDoField.value ='';
    toDoList();
})

const ul = document.querySelector("ul");
function toDoList(){
let template = ``;
for(let i = 0; i < toDos.length; i++){
template += `<li data-index={i}>${toDos[i]}</li>`
    ul.innerHTML = template;
}
}

