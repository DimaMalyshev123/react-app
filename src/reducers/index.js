import { combineReducers } from 'redux';
import { listNews } from './listNews';
import { currentPage } from './currentPage';
import { isLoading } from './isLoading';

export default combineReducers({
  currentPage,
  listNews,
  isLoading
});
