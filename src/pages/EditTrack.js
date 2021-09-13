import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TrackForm from '../components/TrackForm';

const EditTrack = ({
  loginUser, history, items, addItems, sameDateTracks, targetDate,
}) => {
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = () => {
    Object.keys(state).forEach((key) => {

    })
  };

  return (loginUser ? (
    <div className="add-track">
      <h1 className="heading">Edit Track</h1>
      <div className="content">
        {error && <p className="error-msg">{error}</p>}
        <TrackForm handleSubmit={handleSubmit} itemTitles={itemTitles} targetDate={targetDate} />
        {msg && <p className="info-msg">{msg}</p>}
        <Link to="/tracks" className="btn">Cancel $ Back</Link>
      </div>
    </div>
  ) : <Redirect to="/" />);
};

EditTrack.propTypes = {
  items: PropTypes.instanceOf(Array),
  loginUser: PropTypes.bool.isRequired,
  history: PropTypes.instanceOf(Object),
  addItems: PropTypes.func,
  sameDateTracks: PropTypes.instanceOf(Array),
  targetDate: PropTypes.number,
};

EditTrack.defaultProps = {
  items: [],
  history: null,
  addItems: null,
  sameDateTracks: [],
  targetDate: null,
};

export default EditTrack;
