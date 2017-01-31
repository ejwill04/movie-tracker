import React, { Component } from 'react';

export default class Movies extends Component {

  render() {
    console.log('store:', this.context.store);
    let moviesList = this.props.movies || ['blah'];
    const newMoviesList = moviesList.map(m => (
      <article key={m.id} className='movie-item'>
        <p>{m.title}</p>
        <img src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`} alt={`movie-poster-${m.title}`} height='300' />
        <input className='btn btn-favorite' type='button' value='favorite' />
      </article>
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
