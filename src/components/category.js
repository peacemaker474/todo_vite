import store from '../store/store';

function showCategory() {
  const [list, setLists] = store.toDo();
  const [title, setTitle] = store.category();

  const ul = document.createElement('ul');
  ul.classList = 'toDo__categories';

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

  return ul;
}

export default showCategory;
