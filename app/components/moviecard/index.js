/* eslint camelcase: 0 */

import React from 'react';
import { Link } from 'react-router';

const handleFavoriteButtonClick = (props) => {
  const { user } = props;
  const { id: movie_id, title, poster_path, release_date, vote_average, overview, favoriteId, favorited } = props.data;
  if (favorited) {
    fetch(`http://localhost:3000/api/users/${user.id}/favorites/${movie_id}`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'DELETE',
      })
      .then(response => response.json())
      .then(payload => {
        if (payload.status === 'success') {
          props.toggleFavorite(props.data, favoriteId);
        }
      });
  } else {
    fetch('http://localhost:3000/api/users/favorites/new',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          user_id: user.id,
          movie_id,
          title,
          poster_path,
          release_date,
          vote_average,
          overview,
        }),
      })
      .then(response => response.json())
      .then(payload => {
        if (payload.status === 'success') {
          props.toggleFavorite(props.data, payload.id);
        } else {
        }
      });
  }
};

const MovieCard = (props) => {
  const { id, title, poster_path, favorited } = props.data;
  return (
    <article
      className='movie-item'>
      <Link to={`/description/${id}`}>
        <img
          className='list-poster'
          src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : `http://assets.flicks.co.nz/images/movies/poster/500x735.png`}
          alt={poster_path ? `movie-poster-${title}` : `movie-poster-not-found`}
          height='300'
        />
      </Link>

      { props.user
          ? <input
            className={`${favorited ? 'fav-status-true' : ''} btn btn-favorite`}
            type='button'
            value='favorite'
            onClick={() => handleFavoriteButtonClick(props)}
           />
          : null
      }
    </article>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  id: React.PropTypes.number,
  data: React.PropTypes.object,
  title: React.PropTypes.string,
  poster_path: React.PropTypes.string,
  overview: React.PropTypes.string,
  toggleFavorite: React.PropTypes.func,
  user: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
};
