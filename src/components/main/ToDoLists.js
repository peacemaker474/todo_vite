import store from '../../store/store';

function ToDoLists() {
  const [toDoLists, setToDoLists] = store.toDoStore();
  const [title, _] = store.titleStore();

  if (typeof toDoLists() === 'string') {
    const h2 = document.createElement('h2');
    h2.className = 'todo__list-none';
    h2.textContent = toDoLists();

    return h2;
  } else {
    const ul = document.createElement('ul');
    ul.classList = 'toDo__lists';

    const li = toDoLists()
      .filter((item) => !item.category.includes(title()))
      .map(
        (item) => `
      <li class='toDo__list'>
        <span class='toDo-title'> ${item.title} </span>
        <div class='toDo__categories-lists'>
          ${item.category.map(
            (btn) => `<button class='category-button'> ${btn} </button>`
          )}
        </div>
      </li>
    `
      );

    ul.innerHTML = li.join('');

    return ul;
  }
}

export default ToDoLists;
