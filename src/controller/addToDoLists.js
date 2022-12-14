import store from '../store/store';

const addToDoListsUI = (list, nowCategory) => {
  const noneTitle = document.querySelector('.todo__list-none');

  if (noneTitle) {
    const newUl = document.createElement('ul');
    newUl.className = 'toDo__lists';

    newUl.innerHTML = `
      <li class='toDo__list'>
        <span class='toDo-title'> ${list.title} </span>
        <div class='toDo__categories-lists'>
          ${list.category.map((item) =>
            item !== nowCategory
              ? `<button class='category-button'> ${item} </button>`
              : null
          )}
        </div>
      </li>
    `;

    noneTitle.replaceWith(newUl);
  } else {
    const ul = document.querySelector('.toDo__lists');

    const li = document.createElement('li');
    li.className = 'toDo__list';

    li.innerHTML = `
      <span class='toDo-title'> ${list.title} </span>
      <div class='toDo__categories-lists'>
        ${list.category.map((item) =>
          item !== nowCategory
            ? `<button class='category-button'> ${item} </button>`
            : null
        )}
      </div>
    `;

    ul.append(li);
  }
};

export const handleAddToDoLists = (evt) => {
  evt.preventDefault();

  const [toDoLists, setToDoLists] = store.toDoStore();
  const input = document.querySelector('.toDo__input');
  const nowCategory = localStorage.getItem('TITLE');
  const categories = JSON.parse(localStorage.getItem('CATEGORY'));

  const newToDo = {
    id: new Date().getTime(),
    title: input.value,
    category: categories.filter((item) => item !== nowCategory),
  };

  const changeToDo = [...toDoLists(), newToDo];

  setToDoLists(changeToDo);
  addToDoListsUI(newToDo, nowCategory);
  input.value = '';
};
