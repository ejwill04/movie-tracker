/* eslint camelcase: 0, eqeqeq: 0 */
import { browserHistory } from 'react-router';

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
        src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : `http://assets.flicks.co.nz/images/movies/poster/500x735.png`}
        alt={poster_path ? `movie-poster-${title}` : `movie-poster-not-found`}
      />
      <div className='bg'>
        <img className='movie-desc-backdrop' src={backdrop_path ? `https://image.tmdb.org/t/p/w500/${backdrop_path}` : null} />
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
