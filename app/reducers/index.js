import { combineReducers } from 'redux';
import userReducer from './userReducer';
import favoritesReducer from './favoritesReducer';

const rootReducer = combineReducers({
  userReducer,
  favoritesReducer,
});

export default rootReducer;
