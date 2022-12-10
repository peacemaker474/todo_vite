import store from '../../store/store';

const handleAddCategory = (evt) => {
  evt.target.classList.toggle('add-able');
  const form = document.querySelector('.toDo__category-form');

  form.classList.toggle('categoryForm-modal');
};

const addCategoryButton = () => {
  const li = document.createElement('li');
  const button = document.createElement('button');

  li.className = 'toDo__category add_category';
  button.textContent = 'Add';

  button.addEventListener('click', handleAddCategory);

  li.append(button);

  return li;
};

function ViewCategories() {
  const [category, setCategory] = store.categoryStore();
  const [title, setTitle] = store.titleStore();

  const ul = document.createElement('ul');
  ul.className = 'toDo__categories';

  const li = category().map((item) =>
    item === title()
      ? `
      <li class='toDo__category ${item} disable'>
        <button disabled> ${item} </button>
      </li>
    `
      : `
      <li class='toDo__category ${item}'>
        <button> ${item} </button>
      </li>
    `
  );

  ul.innerHTML = li.join('');
  ul.prepend(addCategoryButton());

  return ul;
}

export default ViewCategories;
