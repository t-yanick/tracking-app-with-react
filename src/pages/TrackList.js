import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes, { arrayOf } from 'prop-types';
import TrackListItem from '../components/TrackListItem';

const TrackList = ({
  addTracks, loginUser, addTrackDates, trackDates, tracks, items, addItems,
}) => {
  const [error, setError] = useState('');

  return loginUser ? (
    <div className="TrackList">
      <h1 className="heading">All tracks</h1>
      <div className="content">
        {error && <p className="error-msg">{error}</p>}
        <div className="tracks mb3">
          {trackDates.length > 0 && trackDates.map((trackDate) => {
            const milSec = Number(trackDate);
            const sameDateTracks = tracks.filter((track) => moment(Number(track.date)).isSame(moment(milSec), 'day'));

            return (
              <TrackListItem
                milSec={milSec}
                key={milSec}
                sameDateTracks={sameDateTracks}
                itemNum={items.length}
              />
            );
          })}
        </div>
        <Link to="track/create" className="btn dark">Add New Track</Link>
      </div>
    </div>
  ) : <Redirect to="/" />;
};

TrackList.propTypes = {
  addTracks: PropTypes.func,
  addTrackDates: PropTypes.func,
  loginUser: PropTypes.bool.isRequired,
  items: PropTypes.instanceOf(Array),
  tracks: PropTypes.instanceOf(arrayOf),
  addItems: PropTypes.func,
  trackDates: PropTypes.instanceOf(Array),
};

TrackList.defaultProps = {
  addTracks: null,
  addTrackDates: null,
  items: [],
  addItems: null,
  trackDates: [],
  tracks: [],
};

export default TrackList;