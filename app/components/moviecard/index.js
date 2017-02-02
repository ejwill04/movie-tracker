import React from 'react';

const showDescription = (overview) => {
  // console.log(overview);
};

const MovieCard = (props) => {
  const { title, poster_path, overview, favorited } = props.data;
  // console.log()
  return (
    <article
      onMouseOver={() => showDescription(overview)}
      className='movie-item'>
      <p className="movie-title">{title}</p>

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
            onClick={() => props.toggleFavorite(props.data)}
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
