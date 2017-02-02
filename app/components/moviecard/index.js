import React from 'react';

const showDescription = (overview) => {
  // console.log(overview);
};

const handleFavoriteButtonClick = (props) => {
  console.log(props.data.favorited)
  if (props.data.favorited) {
    return;
  }

  console.log(props.user);
  const { user } = props;

  const { id: movie_id, title, poster_path, release_date, vote_average, overview } = props.data;
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
    .then(payload => console.log(payload));

  props.toggleFavorite(props.data);
};

const MovieCard = (props) => {
  const { title, poster_path, overview, favorited } = props.data;
  // console.log()
  return (
    <article
      onMouseOver={() => showDescription(overview)}
      className='movie-item'>
      <p className='movie-title'>{title}</p>

      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={`movie-poster-${title}`}
        height='300'
      />

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
