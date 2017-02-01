import { connect } from 'react-redux';
import Login from '../components/login';
import { addUsers } from '../actions';

const mapStateToProps = (state) => {
  return { users: state.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUsers: (data) => {
      dispatch(addUsers(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
