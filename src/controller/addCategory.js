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

  const [toDo, setToDo] = store.toDo();
  const input = evt.target[0];

  const newToDo = toDo().map((item) => {
    return {
      ...item,
      category: [...item.category, input.value],
    };
  });
  setToDo(newToDo);
  handleAddCategoryUi(input.value);
  input.value = '';
};
