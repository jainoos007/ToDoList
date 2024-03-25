const todolist = [];

document.querySelector('.js-addButton')
  .addEventListener('click', () => {
    addTodolist();
  });

function addTodolist() {

  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;

  const dateElement = document.querySelector('.js-date-input')
  const date = dateElement.value;

  todolist.push(
    {
      // name: name,
      // date: date
      name,date
    }
    );
  
  inputElement.value = '';
  dateElement.value = '';

  renderTodolist();

}

renderTodolist();

function renderTodolist() {
  
  let todolistHtml = '';

  todolist.forEach((todoobject,index) => {
    const {name,date} = todoobject;
    const html = `
      <div>${name}</div>
      <div>${date}</div>
      <button class = "delete-button js-deleteButton">Delete</button>
    
    `;
    todolistHtml += html;
  });

  /*for (let i = 0; i < todolist.length; i++) {
    const todoobject = todolist[i];
    // const name = todoobject.name;
    // const date = todoobject.date;
    const {name,date} = todoobject;
    const html = `
      <div>${name}</div>
      <div>${date}</div>
      <button onclick = "
        todolist.splice(${i},1);
        renderTodolist();
      " class = "delete-button">Delete</button>
    
    `;
    todolistHtml += html;

  }*/
  document.querySelector('.js-elements')
    .innerHTML = todolistHtml;

  document.querySelectorAll('.js-deleteButton')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todolist.splice(index, 1);
        renderTodolist();
      });
    });  
}















