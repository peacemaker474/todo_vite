import store from '../store/store';
import { handleChangeCategory } from './updateCategory';

const handleUpdateToDoCategory = (category) => {
  const buttons = Array.from(
    document.querySelectorAll('.toDo__categories-lists')
  );

  buttons.forEach((item) => {
    const button = document.createElement('button');
    button.className = 'category-button';
    button.textContent = category;

    item.append(button);
  });
};

const handleAddCategoryUI = (category) => {
  const ul = document.querySelector('.toDo__categories');

  const li = document.createElement('li');
  const button = document.createElement('button');

  li.className = `toDo__category ${category}`;
  button.textContent = category;

  li.addEventListener('click', handleChangeCategory);

  li.append(button);
  ul.append(li);
};

export const handleAddCategory = (evt) => {
  evt.preventDefault();

  const [toDoLists, setToDoLists] = store.toDoStore();
  const [category, setCategory] = store.categoryStore();
  const input = evt.target[0];

  if (typeof toDoLists() !== 'string') {
    const newToDo = toDoLists().map((item) => ({
      ...item,
      category: [...item.category, input.value],
    }));

    setToDoLists(newToDo);
  }

  setCategory(input.value);
  handleAddCategoryUI(input.value);
  handleUpdateToDoCategory(input.value);
  input.value = '';
};
