import { connect } from 'react-redux';
import MovieDescription from '../components/movieDescription';
import { toggleFavorite } from '../actions';

const mapStateToProps = (state) => {
  return { movies: state.movies.results, popularMovies: state.popularMovies.results, user: state.user };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFavorite: (data, favoriteId) => {
      dispatch(toggleFavorite(data, favoriteId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDescription);
