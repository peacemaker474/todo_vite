import store from '../store/store';

function todoLists() {
  const [toDoLists, setToDoLists] = store.toDoStore();

  if (typeof toDoLists() === 'string') {
    const h2 = document.createElement('h2');
    h2.className = 'todo__list-none';
    h2.textContent = toDoLists();

    return h2;
  } else {
    const ul = document.createElement('ul');
    ul.classList = 'todo__lists';

    console.log(list());
    const li = list().map(
      (item) => `<li class='todo__list ${item.id}'> ${item.title} </li>`
    );

    ul.innerHTML = li.join('');

    return ul;
  }
}

export default todoLists;
