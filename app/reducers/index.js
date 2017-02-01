import { combineReducers } from 'redux';
import user from './userReducer';
import favoritesReducer from './favoritesReducer';
import movies from './moviesReducer';

const rootReducer = combineReducers({
  user,
  favoritesReducer,
  movies,
});

export default rootReducer;
