import { combineReducers } from 'redux';
import user from './userReducer';
import favorites from './favoritesReducer';
import movies from './moviesReducer';
import error from './errorMessageReducer';

const rootReducer = combineReducers({
  user,
  movies,
  error,
  favorites,
});

export default rootReducer;
