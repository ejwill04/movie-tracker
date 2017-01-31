import React, { Component } from 'react';

export default class Movies extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div>
        <h2>Movies</h2>
        <section className='movie-list'>
          <article className='movie-item'>Movie 0</article>
          <article className='movie-item'>Movie 1</article>
          <article className='movie-item'>Movie 2</article>
          <article className='movie-item'>Movie 3</article>
          <article className='movie-item'>Movie 4</article>
          <article className='movie-item'>Movie 5</article>
          <article className='movie-item'>Movie 6</article>
          <article className='movie-item'>Movie 7</article>
          <article className='movie-item'>Movie 8</article>
          <article className='movie-item'>Movie 9</article>
        </section>
      </div>
    );
  }
}
