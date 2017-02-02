import { connect } from 'react-redux';
import Favorites from '../components/favorites';
import { toggleFavorite } from '../actions';

const mapStateToProps = (state) => {
  return { favorites: state.movies.results, user: state.user };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFavorite: (data) => {
      dispatch(toggleFavorite(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
