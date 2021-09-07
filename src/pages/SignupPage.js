import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import UsersForm from '../components/UsersForm';

const SignupPage = ({

}) => {
  const [errors, setErrors] = useState([]);
  const [msg, setMsg] = useState('');

  const handleSubmit = (username, password) => {

  };

  return (
    <div>
      <h1 className="heading">SignUp</h1>
      <div className="content">
        {errors && errors.map((error) => (<p key={error} className="error-msg">{error}</p>))}
        {msg && <p className="info-msg">{msg}</p>}
        <UsersForm handleSubmit={handleSubmit} btnName="Sign Up" />
        <Link to="/" className="btn">Go back to Home</Link>
      </div>
    </div>
  );
};

export default SignupPage;