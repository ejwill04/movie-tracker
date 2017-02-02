import React, { Component } from 'react';
import MovieCard from '../moviecard';

export default class Favorites extends Component {

  render() {
      let moviesList = this.props.favorites || [];
      const newMoviesList = moviesList.map(m => (
        <MovieCard {...this.props} data={m} key={m.id} />
      ));

    return (
      <div>
        <h2>Favorites</h2>
        <section className='movie-list'>
          {newMoviesList}
        </section>
      </div>
    );
  }
}
