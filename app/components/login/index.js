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
      }).then(response => response.json())
      .then(payload => this.validateCreateUser(payload.status, email, payload.id));
        // let id = response.json().then(payload => payload.id);
        // console.log(id);
        // this.validateCreateUser(response, email, id);
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

  validateCreateUser(status, email, id) {
    if (status === 'success') {
      this.addNewUserToStore(email, id);
      browserHistory.push('/');
    } else {
      alert('Email has already been used');
    }
  }

  addNewUserToStore(email, id) {
    const userData = { name: email, id: id, email: email };
    this.props.setActiveUser(userData);
  }

  validateUser(response) {
    if (response.status === 200) {
      response.json().then(payload =>
         this.props.setActiveUser(payload.data));
      browserHistory.push('/');
    } else {
      alert('Password and email do not match');
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
        <p className='status'></p>
      </form>
    );
  };
};
