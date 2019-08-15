export const isAuth = (state = '', action) => {
  switch (action.type) {
    case 'IS_AUTH':
      return (state = action.auth);
    default:
      return state;
  }
};
