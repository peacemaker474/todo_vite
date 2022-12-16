export default function allReplaceChild(lists) {
  const ul = document.querySelector('.toDo__lists');

  const li = lists.map(
    (item) => `
    <li class='toDo__list'>
      <span class='toDo-title'> ${item.title} </span>
      <div class='toDo__categories-lists' id=${item.id}>
        ${item.category.map(
          (btn) => `<button class='category-button'> ${btn} </button>`
        )}
      </div>
    </li>
  `
  );

  ul.innerHTML = li.join('');
}
