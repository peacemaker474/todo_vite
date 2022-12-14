import store from '../store/store';

const handleChangeToDoLists = (evt) => {
  if (evt.target.tagName === 'BUTTON') {
    const [toDoLists, setToDoLists] = store.toDoStore();
    const [title, setTitle] = store.titleStore();
    const [categories, setCategories] = store.categoryStore();
    const moveCategory = evt.target.textContent.trim();

    const newCategory = categories().filter((item) => item !== moveCategory);
    const nowId = evt.target.parentElement.id;

    const changeToDo = toDoLists()
      .filter((item) => item.id === +nowId)
      .map((item) => ({
        ...item,
        category: [...newCategory],
      }));

    const notChangeToDo = toDoLists().filter((item) => item.id !== +nowId);
    const newToDo = [...notChangeToDo, ...changeToDo];
    setToDoLists(newToDo);
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
