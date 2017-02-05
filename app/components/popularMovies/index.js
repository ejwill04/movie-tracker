import React, { Component } from 'react';
import MovieCard from '../moviecard';
import { Link } from 'react-router';
import { API_KEY } from '../../key';

export default class PopularMovies extends Component {

  handleClick(action) {
    return fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&page=${this.props.page + 1}`)
    .then(response => response.json())
    .then(payload => action(payload))
    .catch(error => console.log(error));
  }

  render() {
    const moviesList = this.props.popularMovies || [];
    const popularMoviesList = moviesList.map(m => (
      <MovieCard {...this.props} data={m} key={m.id} />
    ));

    return (
      <div>
        <Link to='/'>
          <input
            value='Show Upcoming'
            className='btn'
            readOnly
          />
        </Link>
        <h2>Popular</h2>
        <section className='movie-list'>
          {popularMoviesList}
        </section>
        <input className='btn btn-more' value='more' type='button' onClick={this.handleClick.bind(this, this.props.appendPopularMovies)} />
      </div>
    );
  }
}

PopularMovies.propTypes = {
  movies: React.PropTypes.array,
  popularMovies: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
  ]),
};
