import React, { Component } from 'react';

const addToFavs = (e) => {
  console.log(e);
};

const MovieCard = (props) => {
  const { id, title, poster_path } = props.data;
  return (
    <article className='movie-item'>
      <p>{title}</p>
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={`movie-poster-${title}`} height='300' />
      <input
        className='btn btn-favorite'
        type='button'
        value='favorite'
        onClick={(e) => addToFavs(e)}
      />
    </article>
  );
};

export default MovieCard;
