import { connect } from 'react-redux';
import Favorites from '../components/favorites';
import { toggleFavorite } from '../actions';

const mapStateToProps = (state) => {
  return { favorites: state.favorites };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFavorite: (data) => {
      dispatch(toggleFavorite(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
