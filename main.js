import './styles/style.css';
import gnb from './src/components/gnb';
import mainPage from './src/pages/mainPage';

const app = document.getElementById('app');

app.append(gnb());
app.append(mainPage());
