import { connect } from 'react-redux';
import PopularMovies from '../components/popularMovies';
import { toggleFavorite } from '../actions';

const mapStateToProps = (state) => {
  return { popularMovies: state.popularMovies.results, user: state.user };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFavorite: (data, favoriteId) => {
      dispatch(toggleFavorite(data, favoriteId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopularMovies);
