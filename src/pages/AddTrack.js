import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TrackForm from '../components/TrackForm';

const AddTrack = ({

}) => {
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = () => {

  };

  return (
    <div className="add-track">
      <h1 className="heading">Add Track</h1>
      <div className="content">
        <div className="content__msg">Welcome back. Let's add your track for today</div>
        <TrackForm handleSubmit={handleSubmit} targetDate={null} />
        message
        error
        <Link to="/tracks" className="btn">Cancel & Go Back to Track List</Link>
      </div>
    </div>
  )
};

export default AddTrack;