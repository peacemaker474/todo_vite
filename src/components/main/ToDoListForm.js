const handleAddToDoLists = (evt) => {
  evt.preventDefault();
};

function ViewToDoListForm() {
  const form = document.createElement('form');
  form.className = 'toDo__Lists-form';

  form.innerHTML = `
    <input type='text' placeholder='할 일 목록을 입력하세요.' name='ToDo' class='toDo__input' />
    <button class='toDo__button'> Add </button>
  `;

  form.addEventListener('submit', handleAddToDoLists);

  return form;
}

export default ViewToDoListForm;
