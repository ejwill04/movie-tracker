import { connect } from 'react-redux';
import PopularMovies from '../components/popularMovies';
import { addPopularMovies } from '../actions';

const mapStateToProps = (state) => {
  return { popularMovies: state.popularMovies.results, user: state.user };
};

// const mapDispatchToProps = (dispatch) => {
//   return;
// };

export default connect(mapStateToProps, null)(PopularMovies);
