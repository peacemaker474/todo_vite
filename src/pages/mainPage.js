import ViewCategories from '../components/category/Categories';
import ViewCategoryForm from '../components/category/CategoryForm';
import ViewToDoListForm from '../components/main/ToDoListForm';
import ToDoLists from '../components/main/ToDoLists';

function mainPage() {
  const main = document.createElement('main');
  const hr = document.createElement('hr');
  main.className = 'main__lists';
  hr.className = 'middleLine';

  main.append(ViewCategories());
  main.append(ViewCategoryForm());
  main.append(hr);
  main.append(ViewToDoListForm());
  main.append(ToDoLists());

  return main;
}

export default mainPage;
