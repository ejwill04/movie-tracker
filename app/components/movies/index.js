import React, { Component } from 'react';
import MovieCard from '../moviecard';

export default class Movies extends Component {

  render() {
    const moviesList = this.props.movies || [];
    const newMoviesList = moviesList.map(m => (
      <MovieCard {...this.props} data={m} key={m.id} />
    ));

    return (
      <div>
        <h2>Now Playing</h2>
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
