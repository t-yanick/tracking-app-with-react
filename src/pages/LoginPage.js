import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import UsersForm from '../components/UsersForm';

const LoginPage = ({

}) => {
  const [errors, setErrors] = useState([]);
  const [msg, setMsg] = useState('');

};

const handleSubmit = (username, password) => {

};

return (
  <div>
    <h1 className="heading">Login</h1>
    <div className="content">
      Error Message
      <UsersForm handleSubmit={handleSubmit} btnName="Login" />
      <Link to="/" className="btn">Go back to Home</Link>
    </div>
  </div>
);

export default LoginPage;