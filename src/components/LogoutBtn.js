import React from 'react';
import PropTypes from 'prop-types';

const LogoutBtn = ({
  logIn, removeAllTracks, setUser, removeAllTrackDates,
}) => {
  const onLogout = () => {
    localStorage.removeItem('token');
    logIn(false);
    setUser({});
    removeAllTracks();
    removeAllTrackDates();
  };

  return (
    <button type="button" onClick={onLogout} className="btn">Logout</button>
  );
};

LogoutBtn.propTypes = {
  logIn: PropTypes.func,
  removeAllTracks: PropTypes.func,
  removeAllTrackDates: PropTypes.func,
  setUser: PropTypes.func,
};

LogoutBtn.defaultProps = {
  logIn: null,
  removeAllTracks: null,
  removeAllTrackDates: null,
  setUser: null,
};

export default LogoutBtn;