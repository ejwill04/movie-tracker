import React, { Component } from 'react';
import MovieCard from '../moviecard';
import { Link } from 'react-router';

export default class Movies extends Component {

  render() {
    const moviesList = this.props.movies;
    // console.log('movies',this.props);
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
          />
        </Link>
        <h2>Upcoming</h2>
        <section className='movie-list'>
          {newMoviesList}
        </section>
      </div>
    );
  }
}

Movies.propTypes = {
  movies: React.PropTypes.array,
};
