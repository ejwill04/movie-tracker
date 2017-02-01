import { connect } from 'react-redux';
import Movies from '../components/movies';
import { toggleFavorite } from '../actions';

const mapStateToProps = (state) => {
  return { movies: state.movies.results };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFavorite: (data) => {
      dispatch(toggleFavorite(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
