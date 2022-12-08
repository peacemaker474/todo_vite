import showCategory from '../components/category';
import showCategoryForm from '../components/categoryForm';
import todoLists from '../components/todolists';

function mainPage() {
  const main = document.createElement('main');
  const hr = document.createElement('hr');
  main.className = 'main__lists';
  hr.className = 'middleLine';

  main.append(showCategory());
  main.append(showCategoryForm());
  main.append(hr);
  main.append(todoLists());

  return main;
}

export default mainPage;
