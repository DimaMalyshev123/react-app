export const isLoading = (state = true, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return (state = action.loading);
    default:
      return state;
  }
};
