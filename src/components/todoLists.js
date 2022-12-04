import store from '../store/store';

function todoLists() {
  const [list, setLists] = store.toDo();

  const ul = document.createElement('ul');
  ul.classList = 'todo__lists';

  const li = list.map(
    (item) => `<li class='todo__list ${item.id}'> ${item.title} </li>`
  );

  ul.innerHTML = li.join('');

  return ul;
}

export default todoLists;
