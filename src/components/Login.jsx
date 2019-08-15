import React from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { auth } from '../api/auth';
import { connect } from 'react-redux';

const Login = props => {
  const [dataUser, updateCredentials] = useState({ login: '', password: '' }); // updateCredentials

  function test() {
    alert(dataUser.login);
    alert(dataUser.password);
  }

  return (
    <div>
      {props.isAuth ? <Redirect to='/news' /> : null}
      <form onSubmit={() => props.auth(dataUser)}>
        <h2> Login</h2>
        <label>Username: </label>
        <br />
        <input
          className='inputForm'
          type='text'
          name='username'
          onChange={e =>
            updateCredentials({ ...dataUser, login: e.target.value })
          }
        />
        <br />
        <label>Password: </label>
        <br />
        <input
          className='inputForm'
          type='password'
          name='password'
          onChange={e =>
            updateCredentials({ ...dataUser, password: e.target.value })
          }
        />
        <br />
        <button type='submit'>Sign in</button>
      </form>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    isAuth: state.isAuth
  };
};

export default connect(
  mapStateToProps,
  { auth }
)(Login);
