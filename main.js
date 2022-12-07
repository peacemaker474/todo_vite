import './styles/style.css';
import gnb from './src/components/gnb';
import mainPage from './src/pages/mainPage';
import store from './src/store/store';

const app = document.getElementById('app');

app.append(gnb());
app.append(mainPage());

const buttons = Array.from(document.querySelectorAll('.todo_category'));

const [title, setTitle] = store.category();

const handleClick = (evt) => {
  const target = document.querySelector('.disable');
  const disabledBtn = target.querySelector('button');
  const mainTitle = document.querySelector('.main__header-title');
  disabledBtn.disabled = false;
  target.classList.remove('disable');

  const value = evt.target.textContent.trim();
  evt.target.disabled = true;
  evt.target.parentElement.classList.add('disable');
  setTitle(value);
  mainTitle.textContent = `My ${title()} List`;
};

buttons.forEach((item) => item.addEventListener('click', handleClick));
