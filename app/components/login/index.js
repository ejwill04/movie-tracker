import React from 'react';

export default class Login extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    this.getUsers();
  }

  getUsers() {
    const addUsers = this.props.addUsers;
    fetch('http://localhost:3000/api/users')
      .then(response => response.json())
      .then(payload => addUsers(payload.data));
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
          />
        </div>
      </form>
    );
  };
};
