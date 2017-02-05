import { connect } from 'react-redux';
import PopularMovies from '../components/popularMovies';
import { toggleFavorite, appendPopularMovies } from '../actions';

const mapStateToProps = (state) => {
  return { popularMovies: state.popularMovies.results, user: state.user, page: state.popularMovies.page };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFavorite: (data, favoriteId) => {
      dispatch(toggleFavorite(data, favoriteId));
    },
    appendPopularMovies: data => dispatch(appendPopularMovies(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopularMovies);
