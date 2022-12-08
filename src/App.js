import gnb from './components/gnb';
import updateCategory from './controller/updateCategory';
import mainPage from './pages/mainPage';

function InitialView() {
  const app = document.getElementById('app');

  app.append(gnb());
  app.append(mainPage());
}

function App() {
  InitialView();
  updateCategory();
}

export default App;
