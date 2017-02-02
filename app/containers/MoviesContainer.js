import { connect } from 'react-redux';
import Movies from '../components/movies';
import { toggleFavorite } from '../actions';

const mapStateToProps = (state) => {
  return { movies: state.movies.results, user: state.user };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFavorite: (data, favoriteId) => {
      dispatch(toggleFavorite(data, favoriteId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
