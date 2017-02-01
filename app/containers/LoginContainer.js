import { connect } from 'react-redux';
import Login from '../components/login';
import { setActiveUser } from '../actions';

const mapStateToProps = (state) => {
  return { users: state.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveUser: (data) => {
      dispatch(setActiveUser(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
