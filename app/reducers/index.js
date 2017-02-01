import { combineReducers } from 'redux';
import user from './userReducer';
import favoritesReducer from './favoritesReducer';
import movies from './moviesReducer';
import error from './errorMessageReducer';

const rootReducer = combineReducers({
  user,
  favoritesReducer,
  movies,
  error,
});

export default rootReducer;
