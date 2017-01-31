import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  constructor() {
    super();
  }

  toggleBtnPath() {
    if (window.location.pathname === '/favorites') {
      return (
        <Link to='/'>
          <input
            type='submit'
            value='Full List'
          />
        </Link>
      );
    }
    return (
      <Link to='/favorites'>
        <input
          type='submit'
          value='Favorites'
        />
      </Link>
    );
  }

  render() {
    return (
      <div>
        <h1>Movie Watcher</h1>
        {this.toggleBtnPath()}
        {this.props.children}
      </div>
    );
  }
}
