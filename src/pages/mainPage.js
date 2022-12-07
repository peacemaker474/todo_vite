import showCategory from '../components/category';
import todoLists from '../components/todolists';

function mainPage() {
  const main = document.createElement('main');
  main.classList = 'main__lists';

  main.append(showCategory());
  main.append(todoLists());

  return main;
}

export default mainPage;
