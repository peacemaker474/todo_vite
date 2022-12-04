import todoLists from '../components/todolists';

function mainPage() {
  const main = document.createElement('main');
  main.classList = 'main__lists';

  main.append(todoLists());

  return main;
}

export default mainPage;
