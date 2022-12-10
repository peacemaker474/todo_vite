import store from '../../store/store';

function Gnb() {
  const [title, _] = store.titleStore();

  const header = document.createElement('header');
  header.className = 'main__header';

  header.innerHTML = `
    <h1 class='main__header-title'> My ${title()} List </h1>
  `;

  return header;
}

export default Gnb;
