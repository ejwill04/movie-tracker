import React from 'react';

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
      });
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
      }).then(data => console.log(data));
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
