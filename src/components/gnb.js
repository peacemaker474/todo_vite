import store from '../store/store';

function gnb() {
  const [title, _] = store.category();

  const header = document.createElement('header');
  header.className = 'main__header';

  header.innerHTML = `
    <h1 class='main__header-title'> My ${title()} List </h1>
  `;

  return header;
}

export default gnb;
