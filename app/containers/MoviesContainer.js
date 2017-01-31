import { connect } from 'react-redux';
import Movies from '../components/movies';

const mapStateToProps = (state) => {
  return { movies: state.movies.results };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // addMovies: (data) => {
    //   dispatch(addMovies(data));
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
