export default function allRemoveChild() {
  const ul = document.querySelector('.toDo__lists');

  const h2 = document.createElement('h2');
  h2.className = 'todo__list-none';
  h2.textContent = '등록된 목록이 없습니다.';

  while (ul.firstChild) {
    ul.firstChild.remove();
  }

  ul.append(h2);
}
