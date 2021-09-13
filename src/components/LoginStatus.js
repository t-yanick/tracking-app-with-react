import React from 'react';
import PropTypes from 'prop-types';

const LoginStatus = ({ loginStats, user }) => (
  <div className="login-status">
    {loginStats ? `Welcome, ${user.user.username}` : 'Please log in'}
  </div>
);

LoginStatus.propTypes = {
  user: PropTypes.instanceOf(Object),
  loginStats: PropTypes.bool,
};

LoginStatus.defaultProps = {
  user: {},
  loginStats: false,
};

export default LoginStatus;
