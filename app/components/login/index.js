import React from 'react';
import { browserHistory } from 'react-router';

export default class Login extends React.Component {

  handleSubmit(e) {
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    e.preventDefault();
    if (email.length > 0 && password.length > 0) {
      this.userLogin(email, password);
      this.refs.email.value = '';
      this.refs.password.value = '';
    } else {
      this.refs.email.focus();
    }
  }

  createUser() {
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    fetch('http://localhost:3000/api/users/new',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ name: email, email: email, password: password }),
      }).then(response => this.validateCreateUser(response, email, password));
  }

  userLogin(email, password) {
    fetch('http://localhost:3000/api/users',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ email: email, password: password }),
      }).then(response => this.validateUser(response));
  }

  validateCreateUser(response, email, password) {
    if (response.status === 200) {
      this.addNewUserToStore(email, password);
      browserHistory.push('/');
    } else {
      alert('Not a valid email and password');
    }
  }

  addNewUserToStore(email, password) {
    const userData = { name: email, password: password, email: email };
    this.props.setActiveUser(userData);
  }

  validateUser(response) {
    if (response.status === 200) {
      response.json().then(payload =>
         this.props.setActiveUser(payload.data));
      browserHistory.push('/');
    } else {
      alert('Your password and email do match');
    }
  }

  render() {
    return (
      <form
        className='login-form'
        onSubmit={this.handleSubmit.bind(this)}
      >
        <input
          className='input-text'
          type='text'
          placeholder='email'
          ref='email'
        />
        <input
          className='input-text'
          type='password'
          placeholder='password'
          ref='password'
        />
        <div className='btn-container' >
          <input
            className='btn btn-login'
            type='submit'
            value='Login'
          />
          <input
            className='btn btn-signup'
            type='button'
            value='Sign Up'
            onClick={this.createUser.bind(this)}
          />
        </div>
      </form>
    );
  };
};
