export const listNews = (state = [], action) => {
  switch (action.type) {
    case 'SET_LIST_NEWS':
      return (state = action.news);
    default:
      return state;
  }
};
