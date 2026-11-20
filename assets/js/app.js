const cl = console.log;

const todoForm = document.getElementById('todoForm');

const todoItemControl = document.getElementById('todoItemControl');

const  todoList = document.getElementById('todoList');


let todosArr =[];


function createList (ele) {
    let result = '';

    ele.forEach(element => { 
        result += ` <li class="list-group-item d-flex justify-content-between">
        <strong>${element.todoItem}</strong>
                <div>
                  <button class="btn btn-sm btn-outline-info ">Edit</button>
                  <button class="btn btn-sm btn-outline-danger ">Remove</button>
                </div>
            </li>`;

        
    });

    todoList.innerHTML = result;
}
createList(todosArr);


function onsubmithdl(eve) {
    eve.preventDefault();
    let todoObj = {
        todoItem : todoItemControl.value
    }
    todosArr.push(todoObj)
    createList(todosArr)
    todoForm.reset()
}



todoForm.addEventListener('submit', onsubmithdl);