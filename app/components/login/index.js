import React from 'react';

export default class Login extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.refs.password.value);
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
        <input
          className='btn btn-login'
          type='submit'
          value='submit'
        />
      </form>
    );
  };
};
