import store from '../store/store';

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

function showCategory() {
  const [list, setLists] = store.toDo();
  const [title, setTitle] = store.category();

  const ul = document.createElement('ul');
  ul.className = 'toDo__categories';

  const li = list()[0]['category'].map((category) =>
    category === title()
      ? `
      <li class='toDo__category ${category} disable'>
        <button disabled> ${category} </button>
      </li>
    `
      : `
      <li class='toDo__category ${category}'>
        <button> ${category} </button>
      </li>
    `
  );

  ul.innerHTML = li.join('');
  ul.prepend(addCategoryButton());

  return ul;
}

export default showCategory;
