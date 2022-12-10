import Gnb from './components/header/Gnb';
import updateCategory from './controller/updateCategory';
import mainPage from './pages/mainPage';

function InitialView() {
  const app = document.getElementById('app');

  app.append(Gnb());
  app.append(mainPage());
}

function App() {
  InitialView();
  updateCategory();
}

export default App;
