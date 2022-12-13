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

const initialTitle = 'TO_DO';
const initialCategories = ['TO_DO', 'DOING'];
const initialToDoLists = '등록된 목록이 없습니다.';

const STORGE_KEY = {
  title: 'TITLE',
  lists: 'TODO_LIST',
  category: 'CATEGORY',
};

const titleStore = (() => {
  let title = localStorage.getItem(STORGE_KEY.title) ?? initialTitle;

  const getTitle = () => title;
  const setTitle = (newTitle) => {
    localStorage.setItem(STORGE_KEY.title, newTitle);
    title = newTitle;
  };

  return (newTitle) => {
    if (newTitle) setTitle(newTitle);
    return [getTitle, setTitle];
  };
})();

const categoryStore = (() => {
  let categories =
    JSON.parse(localStorage.getItem(STORGE_KEY.category)) ?? initialCategories;

  const getCategories = () => categories;
  const setCategories = (category) => {
    const newCategories = [...categories, category];
    localStorage.setItem(STORGE_KEY.category, JSON.stringify(newCategories));
    categories = newCategories;
  };

  return (category) => {
    if (category) setCategories(category);
    return [getCategories, setCategories];
  };
})();

const toDoStore = (() => {
  let store =
    JSON.parse(localStorage.getItem(STORGE_KEY.lists)) ?? initialToDoLists;

  const getStore = () => store;
  const setStore = (newStore) => {
    if (typeof store === 'string') {
      store = [newStore];
      localStorage.setItem(STORGE_KEY.lists, JSON.stringify(store));
    } else {
      store.push(newStore);
      localStorage.setItem(STORGE_KEY.lists, JSON.stringify(store));
    }
  };

  return (newStore) => {
    if (newStore) setStore(newStore);
    return [getStore, setStore];
  };
})();

const store = {
  toDoStore,
  titleStore,
  categoryStore,
};

export default store;
