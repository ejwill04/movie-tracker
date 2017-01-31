import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import MoviesContainer from './containers/MoviesContainer';
import Login from './components/login';
import Favorites from './components/favorites';

require('./styles/main');

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools);

const router = (
  <Router history={browserHistory} >
    <Route path='/' component={AppContainer}>
      <IndexRoute component={MoviesContainer} />
      <Route component={Login} path='/login' />
      <Route component={Favorites} path='/favorites' />
    </Route>
  </Router>
);

ReactDOM.render(<Provider store={store} >{router}</Provider>, document.getElementById('main'));
