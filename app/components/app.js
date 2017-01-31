import React, { Component } from 'react';
import { Link } from 'react-router';
import { API_KEY } from '../key'

export default class App extends Component {
  constructor() {
    super();

  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
      .then(response => response.json())
        .then(obj => console.log(obj))
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
