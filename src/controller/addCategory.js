import store from '../store/store';
import { handleChangeCategory } from './updateCategory';

const handleAddCategoryUi = (category) => {
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

  // const newToDo = toDoLists().map((item) => ({
  //   ...item,
  //   category: [...item.category, input.value],
  // }));

  // setToDo(newToDo);
  setCategory(input.value);
  handleAddCategoryUi(input.value);
  input.value = '';
};
