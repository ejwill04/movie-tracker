import React, { Component } from 'react';

export default class Movies extends Component {

  render() {
    let moviesList = this.props.movies || ['blah'];
    const newMoviesList = moviesList.map(m => (
      <article key={m.id} className='movie-item'>
        <p>{m.title}</p>
        <img src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`} alt={`movie-poster-${m.title}`} height='300' />
      </article>
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
