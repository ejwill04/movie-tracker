import React from 'react';
import { Router, Route, IndexRoute, browserHistory, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import MoviesContainer from './containers/MoviesContainer';
import LoginContainer from './containers/LoginContainer';
import FavoritesContainer from './containers/FavoritesContainer';
import PopularMoviesContainer from './containers/PopularMoviesContainer';
import MovieDescriptionContainer from './containers/MovieDescriptionContainer';

require('./styles/main');

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools);

const router = (
  <Router history={browserHistory} >
    <Route path='/' component={AppContainer}>
      <IndexRoute component={MoviesContainer} />
      <Route component={LoginContainer} path='/login' />
      <Route component={PopularMoviesContainer} path='/popular' />
      <Route component={FavoritesContainer} path='/favorites' />
      <Route component={MovieDescriptionContainer} path='/description/:id' >
    </Route>
    </Route>
  </Router>
);

ReactDOM.render(<Provider store={store} >{router}</Provider>, document.getElementById('main'));
