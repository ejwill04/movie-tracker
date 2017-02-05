import React, { Component } from 'react';
import MovieCard from '../moviecard';
import { Link } from 'react-router';
import { API_KEY } from '../../key';

export default class Movies extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(action) {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&page=${this.props.page + 1}`)
    .then(response => response.json())
    .then(payload => action(payload))
    .catch(error => console.log(error));
  }

  render() {
    const moviesList = this.props.movies;
    const newMoviesList = moviesList === undefined
      ? null
      : moviesList.map(m => (
        <MovieCard {...this.props} data={m} key={m.id} />
        ));

    return (
      <div>
        <Link to='/popular'>
          <input
            value='Show Popular'
            className='btn'
            readOnly
          />
        </Link>
        <h2>Upcoming</h2>
        <section className='movie-list'>
          {newMoviesList}
        </section>
        <input className='btn btn-more' value='more' type='button' onClick={() => this.handleClick(this.props.appendMovies)} />
      </div>
    );
  }
}

Movies.propTypes = {
  page: React.PropTypes.number,
  movies: React.PropTypes.array,
  appendMovies: React.PropTypes.func,
};
