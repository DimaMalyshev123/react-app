import * as action from './actionsConst';

export const setCurrentPage = page => ({
  type: action.SET_CURRENT_PAGE,
  page
});

export const setListNews = news => ({
  type: action.SET_LIST_NEWS,
  news
});

export const isLoading = loading => ({
  type: action.IS_LOADING,
  loading
});
