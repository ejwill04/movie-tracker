import React from 'react';
import { Link } from 'react-router';

const showDescription = (overview) => {
  // console.log(overview);
};

const handleFavoriteButtonClick = (props) => {
  const { user } = props;
  // console.log(user.id);
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
          // console.log(payload.id);
          props.toggleFavorite(props.data, payload.id);
        } else {
          // console.log(payload);
        }
      });
  }
};

const MovieCard = (props) => {
  const { id, title, poster_path, overview, favorited } = props.data;
  // console.log()
  return (
    <article
      onMouseOver={() => showDescription(overview)}
      className='movie-item'>
      {/* <p className='movie-title'>{title}</p> */}

      <Link to={`/description/${id}`}>
        <img
          className='list-poster'
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={`movie-poster-${title}`}
          height='300'
        />
      </Link>

      { props.user
          ? <input
            className={`${favorited ? 'fav-status-true' : ''} btn btn-favorite`}
            type='button'
            value='favorite'
            onClick={() => handleFavoriteButtonClick(props)}
           >
             {/* <i className={`${props.favorited ? 'fav-status-true' : ''} fa fa-star fa-2x`}></i> */}
           </input>
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
