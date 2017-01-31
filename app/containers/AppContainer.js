import { connect } from 'react-redux';
import { addMovies } from '../actions';
import App from '../components/app';

const mapStateToProps = (state) => {
  // console.log(state);
  // return { movies: state.data };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMovies: (data) => {
      dispatch(addMovies(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
