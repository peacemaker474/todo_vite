import { handleAddCategory } from '../../controller/addCategory';

function ViewCategoryForm() {
  const form = document.createElement('form');
  form.className = 'toDo__category-form categoryForm-modal';

  form.innerHTML = `
    <input
      type='text'
      placeholder='새로운 카테고리를 추가하세요.'
      name='newCategory'
      class='add__newCategory'
    />
  `;

  form.addEventListener('submit', handleAddCategory);

  return form;
}

export default ViewCategoryForm;
