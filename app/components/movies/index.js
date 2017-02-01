import React, { Component } from 'react';
import MovieCard from '../moviecard';

export default class Movies extends Component {

  render() {
      let moviesList = this.props.movies || [];
      const newMoviesList = moviesList.map(m => (
        <MovieCard data={m} key={m.id} />
      ));

    return (
      <div>
        <h2>Movies</h2>
        <section className='movie-list'>
          {newMoviesList}
        </section>
      </div>
    );
  }
}
