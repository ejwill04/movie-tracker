import { connect } from 'react-redux';
import { addMovies } from '../actions';
import App from '../components/app';

// const mapStateToProps = (state) => {
// };

const mapDispatchToProps = (dispatch) => {
  return {
    addMovies: (data) => {
      dispatch(addMovies(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
