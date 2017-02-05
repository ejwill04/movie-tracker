/* eslint camelcase: 0, eqeqeq: 0 */

import React from 'react';
import moment from 'moment';

const MovieDescription = (props) => {
  const allMovies = props.movies.concat(props.popularMovies);
  const movieId = props.params.id;
  const movie = allMovies.find(m => m.id == movieId);
  const { title, poster_path, overview, release_date, backdrop_path, vote_average } = movie;
  const releaseDate = moment(release_date).format('MMMM Do YYYY');

  return (
    <div className='movie-desc'>
      <img
        className='movie-desc-poster'
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={`movie-poster-${title}`}
      />
      <div className='bg'>
        <img className='movie-desc-backdrop' src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} />
      </div>
      <div className='movie-text-data'>
        <p className='movie-desc-title'>{movie.title}</p>
        <p className='movie-desc-vote-avg'>Rating: {vote_average}/10</p>
        <p className='movie-desc-release-date'>Release Date: {releaseDate}</p>
        <p className='movie-desc-overview'>{overview}</p>

      </div>

    </div>
  );
};

export default MovieDescription;

MovieDescription.propTypes = {
  movies: React.PropTypes.array,
  params: React.PropTypes.object,
  popularMovies: React.PropTypes.array,
};
