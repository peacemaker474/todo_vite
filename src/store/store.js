const initialState = [
  {
    id: 1,
    title: 'What do you do today?',
    category: ['TO_DO', 'DONING'],
  },
  {
    id: 2,
    title: 'What do you do today?',
    category: ['TO_DO', 'DOING'],
  },
  {
    id: 3,
    title: 'What do you do today?',
    category: ['TO_DO', 'DOING'],
  },
];

const category = (() => {
  let title = 'TO_DO';

  const getTitle = () => title;
  const setTitle = (newTitle) => {
    title = newTitle;
  };

  return (newTitle) => {
    if (newTitle) setTitle(newTitle);
    return [getTitle, setTitle];
  };
})();

const toDo = (() => {
  let store;

  const getStore = () => store || initialState;
  const setStore = (newStore) => {
    store = store ? [...newStore, ...store] : [...newStore, ...initialState];
  };

  return (newStore) => {
    if (newStore) setStore(newStore);
    return [getStore, setStore];
  };
})();

const store = {
  toDo,
  category,
};

export default store;
