import React, { Component } from 'react';
import MovieCard from '../moviecard';
import { Link } from 'react-router';

export default class PopularMovies extends Component {

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
          />
        </Link>
        <h2>Popular</h2>
        <section className='movie-list'>
          {popularMoviesList}
        </section>
      </div>
    );
  }
}

PopularMovies.propTypes = {
  movies: React.PropTypes.array,
  popularMovies: React.PropTypes.object,
};
