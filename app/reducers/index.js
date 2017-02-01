import { combineReducers } from 'redux';
import users from './userReducer';
import favoritesReducer from './favoritesReducer';
import movies from './moviesReducer';

const rootReducer = combineReducers({
  users,
  favoritesReducer,
  movies,
});

export default rootReducer;
