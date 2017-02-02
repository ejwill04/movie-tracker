import React, { Component } from 'react';
import { Link } from 'react-router';
import { API_KEY } from '../key';

export default class App extends Component {

  componentDidMount() {
    this.fetchMovies('now_playing', this.props.addMovies);
    this.fetchMovies('popular', this.props.addPopularMovies);
  }

  fetchMovies(query, action) {
    fetch(`https://api.themoviedb.org/3/movie/${query}?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(payload => action(payload))
    .catch(error => console.log(error));
  }

  showLoginBtn() {
    if (!this.props.user && window.location.pathname !== '/login') {
      return (
        <Link to='/login'>
          <input className='btn btn-login'
            type='submit'
            value='Login'
          />
        </Link>
      );
    }
    else return;
  }

  toggleBtnPath() {
    if (window.location.pathname === '/favorites') {
      return (
        <Link to='/'>
          <input className='btn'
            type='submit'
            value='Now Playing'
          />
        </Link>
      );
    } else if (window.location.pathname === '/') {
      return (
        <Link to='/favorites'>
          <input className='btn'
            type='submit'
            value='Favorites'
          />
        </Link>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>Film Favs</h1>
        {this.toggleBtnPath()}
        {this.showLoginBtn()}
        {this.props.children}
      </div>
    );
  }
}
