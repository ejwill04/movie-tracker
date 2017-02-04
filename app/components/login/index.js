import React from 'react';
import { browserHistory } from 'react-router';

export default class Login extends React.Component {

  handleSubmit(e) {
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    e.preventDefault();
    if (email.length > 0 && password.length > 0 && this.validateEmail(email)) {
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
    if (this.validateEmail(email)) {
      fetch('http://localhost:3000/api/users/new',
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({ name: email, email: email, password: password }),
        }).then(response => response.json())
        .then(payload => {
          this.validateCreateUser(payload.status, email, payload.id);
          localStorage.setItem('activeUserId', JSON.stringify(payload.id));
        });
    }
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
      }).then(response => {
        return this.validateUser(response);
      }).then(payload => {
        return localStorage.setItem('activeUserId', JSON.stringify(payload.data.id));
      });
  }

  validateCreateUser(status, email, id) {
    if (status === 'success') {
      this.addNewUserToStore(email, id);
      browserHistory.push('/');
    } else {
      this.props.setLoginErrorMessage('*Email has already been used*');
    }
  }

  addNewUserToStore(email, id) {
    const userData = { name: email, id: id, email: email };
    this.props.setActiveUser(userData);
  }

  validateUser(response) {
    const jsonResponse = response.json();
    if (response.status === 200) {
      jsonResponse.then(payload =>
         this.props.setActiveUser(payload.data));
      browserHistory.push('/');
    } else {
      this.props.setLoginErrorMessage('*Your email and password do not match*');
    }
    return jsonResponse;
  }

  validateEmail(email) {
    let emailPattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (!emailPattern.test(email)) {
      this.props.setLoginErrorMessage('*Please enter a valid email address');
      return false;
    } else {
      return true;
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
        <p className='status'>{this.props.errorMessage}</p>
      </form>
    );
  };
};

Login.propTypes = {
  setLoginErrorMessage: React.PropTypes.string,
  setActiveUser: React.PropTypes.number,
  errorMessage: React.PropTypes.string,
};
