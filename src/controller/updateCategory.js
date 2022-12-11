import store from '../store/store';

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
