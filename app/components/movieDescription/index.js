import React from 'react';

const MovieDescription = (props) => {

  // props.movies
  // props.popularMovies
  const allMovies = props.movies.concat(props.popularMovies)

  console.log(allMovies);
  console.log(props.params.id)
  const movieId = props.params.id
  const movie = allMovies.find(m => m.id == movieId)
  console.log(movie)

  const { id, title, poster_path, overview, favorited, release_date, backdrop_path, vote_average, vote_count } = movie;
  return (
    <div className='movie-desc'>
      <h2 className='movie-desc-title'>{movie.title}</h2>
      <div className='movie-desc-vote-avg'>Rating: {vote_average}/10</div>
      <p className='movie-desc-release-date'>Release Date: {release_date}</p>
      <div className='bg'>
        <img className='movie-desc-backdrop' src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} />
      </div>
      <img
        className='movie-desc-poster'
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={`movie-poster-${title}`}
      />
      <p className='movie-desc-overview'>{overview}</p>

    </div>
  );
};

export default MovieDescription;
