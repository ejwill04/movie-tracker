import { combineReducers } from 'redux';
import user from './userReducer';
import favorites from './favoritesReducer';
import movies from './moviesReducer';
import popularMovies from './popularMoviesReducer';
import error from './errorMessageReducer';

const rootReducer = combineReducers({
  user,
  movies,
  error,
  favorites,
  popularMovies,
});

export default rootReducer;
