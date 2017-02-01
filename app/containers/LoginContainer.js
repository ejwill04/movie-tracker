import { connect } from 'react-redux';
import Login from '../components/login';
import { setActiveUser, setLoginErrorMessage } from '../actions';

const mapStateToProps = (state) => {
  return { users: state.users, errorMessage: state.error };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveUser: (data) => {
      dispatch(setActiveUser(data));
    },
    setLoginErrorMessage: (data) => {
      dispatch(setLoginErrorMessage(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
