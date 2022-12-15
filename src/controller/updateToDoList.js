import store from '../store/store';

const updateToDoListUI = (lists) => {
  const [title, setTitle] = store.titleStore();

  const showLists = lists.filter((item) => !item.category.includes(title()));
  const ul = document.querySelector('.toDo__lists');

  if (!showLists.length) {
    const h2 = document.createElement('h2');
    h2.className = 'todo__list-none';
    h2.textContent = '등록된 목록이 없습니다.';

    while (ul.firstChild) {
      ul.firstChild.remove();
    }

    ul.append(h2);
  } else {
    const li = showLists.map(
      (item) => `
      <li class='toDo__list'>
        <span class='toDo-title'> ${item.title} </span>
        <div class='toDo__categories-lists' id=${item.id}>
          ${item.category.map(
            (btn) => `<button class='category-button'> ${btn} </button>`
          )}
        </div>
      </li>
    `
    );
    ul.innerHTML = li.join('');
    updateToDoList();
  }
};

const handleChangeToDoLists = (evt) => {
  if (evt.target.tagName === 'BUTTON') {
    const [toDoLists, setToDoLists] = store.toDoStore();
    const [categories, setCategories] = store.categoryStore();
    const moveCategory = evt.target.textContent.trim();

    const newCategory = categories().filter((item) => item !== moveCategory);
    const nowId = evt.target.parentElement.id;

    const changeToDo = toDoLists()
      .filter((item) => String(item.id) === nowId)
      .map((item) => ({
        ...item,
        category: [...newCategory],
      }));

    const notChangeToDo = toDoLists().filter((item) => item.id !== +nowId);
    const newToDo = [...notChangeToDo, ...changeToDo];
    setToDoLists(newToDo);
    updateToDoListUI(newToDo);
  }
};

function updateToDoList() {
  const buttons = Array.from(
    document.querySelectorAll('.toDo__categories-lists')
  );

  buttons.forEach((item) =>
    item.addEventListener('click', handleChangeToDoLists)
  );
}

export default updateToDoList;
