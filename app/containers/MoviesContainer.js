import { connect } from 'react-redux';
import Movies from '../components/movies';
import { toggleFavorite, appendMovies } from '../actions';

const mapStateToProps = (state) => {
  return { movies: state.movies.results, user: state.user, page: state.movies.page };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFavorite: (data, favoriteId) => {
      dispatch(toggleFavorite(data, favoriteId));
    },
    appendMovies: data => dispatch(appendMovies(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
