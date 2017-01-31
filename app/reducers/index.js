import { combineReducers } from 'redux';
import userReducer from './userReducer';
import favoritesReducer from './favoritesReducer';
import movies from './moviesReducer';

const rootReducer = combineReducers({
  userReducer,
  favoritesReducer,
  movies,
});

export default rootReducer;
