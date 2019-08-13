export const currentPage = (state = 1, action) => {
  switch (action.type) {
    case 'SET_CURRENT_PAGE':
      return (state = action.payload);
    default:
      return state;
  }
};
