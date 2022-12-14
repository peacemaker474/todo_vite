import Gnb from './components/header/Gnb';
import updateCategory from './controller/updateCategory';
import updateToDoList from './controller/updateToDoList';
import mainPage from './pages/mainPage';

function InitialView() {
  const app = document.getElementById('app');

  app.append(Gnb());
  app.append(mainPage());
}

function App() {
  InitialView();
  updateCategory();
  updateToDoList();
}

export default App;
