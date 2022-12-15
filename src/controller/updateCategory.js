import store from '../store/store';
import updateToDoList from './updateToDoList';

const changeToDoLists = (title) => {
  const [toDoLists, setToDoLists] = store.toDoStore();
  const ul = document.querySelector('.toDo__lists');

  const lists = toDoLists().filter((item) => !item.category.includes(title));

  if (!lists.length) {
    const h2 = document.createElement('h2');
    h2.className = 'todo__list-none';
    h2.textContent = '등록된 목록이 없습니다.';

    while (ul.firstChild) {
      ul.firstChild.remove();
    }

    ul.append(h2);
  } else {
    const li = lists.map(
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

const changeMainTitle = (currentTitle) => {
  const [title, setTitle] = store.titleStore();

  const mainTitle = document.querySelector('.main__header-title');
  setTitle(currentTitle);
  mainTitle.textContent = `나의 ${title()} 목록`;
};

export const handleChangeCategory = (evt) => {
  const currentDisabledButton = document.querySelector('.disable');
  const changedDisabledButton = currentDisabledButton.querySelector('button');
  changedDisabledButton.disabled = false;
  currentDisabledButton.classList.remove('disable');

  evt.target.disabled = true;
  evt.target.parentElement.classList.add('disable');

  const currentTitle = evt.target.textContent.trim();
  changeMainTitle(currentTitle);
  changeToDoLists(currentTitle);
};

function updateCategory() {
  const categories = Array.from(document.querySelectorAll('.toDo__category'));

  categories
    .filter((category) => !category.className.includes('add_category'))
    .forEach((category) =>
      category.addEventListener('click', handleChangeCategory)
    );
}

export default updateCategory;
