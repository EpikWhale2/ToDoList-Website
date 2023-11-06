let todoList1 = [];

function renderTodoList() {
  todoListString = '';
  const text = document.querySelector('.js-show-work');

  for (let i = 0; i < todoList1.length; i++) {
    const todoObject = todoList1[i];
    const name = todoObject.workName;
    const date = todoObject.dueDate;

    if (name && date) {

      const html = `
      
        <div>${name}</div> 
        <div> ${date} </div>
          <button onclick=
          "deleteTodo(${i})">
          Delete
          </button>
        `;
      todoListString += html;
    }
  }
  
  document.querySelector('.to-do-div').innerHTML = todoListString;
}

function addToDo1() {
  const inputWork = document.querySelector('.js-input');
  const inputDate = document.querySelector('.js-input-dueDate');
  const work = inputWork.value;
  const date = inputDate.value;

  if (work && date) { // Only add if 'work' and 'date' are not empty
    todoList1.push({
      workName: work,
      dueDate: date
    });

    console.log(todoList1);

  }

  inputWork.value = '';
  inputDate.value = '';
  renderTodoList();
}

function deleteTodo(index) {
  todoList1.splice(index, 1);
  renderTodoList();
}

renderTodoList();
