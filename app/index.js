import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import MovieIndex from './components/movieIndex';
import Login from './components/login/';
import Favorites from './components/favorites/';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

require('./styles/main');

const router = (
    <Router history={browserHistory} >
      <Route path='/' component={App}>
        <IndexRoute component={MovieIndex} />
        <Route component={Login} path='/login' />
        <Route component={Favorites} path='/favorites' />
      </Route>
    </Router>
);

ReactDOM.render(router, document.getElementById('main'));
