import { connect } from 'react-redux';
import Login from '../components/login';
import { setActiveUser, setLoginErrorMessage, setFavorites } from '../actions';

const mapStateToProps = (state) => {
  return { user: state.user, errorMessage: state.error };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveUser: (data) => {
      dispatch(setActiveUser(data));
    },
    setLoginErrorMessage: (data) => {
      dispatch(setLoginErrorMessage(data));
    },
    setFavorites: (data) => {
      dispatch(setFavorites(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
