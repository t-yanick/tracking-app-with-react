import React, { } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import Chart from 'react-google-charts';
import TrackItem from '../components/TrackItem';
import calcAchieveTotalRate from '../helpers/calcAchieveTotalRate';

const TrackItems = ({
  sameDateTracks,
  items,
  loginUser,
  addItems,
  date,
  trackDates,
  currentIndex,
  history,
  addTracks,
  addTrackDates,
}) => {
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');

  const totalRate = calcAchieveTotalRate(sameDateTracks, items.length) || 0;
  const rateForChart = totalRate >= 100 ? 100 : totalRate;
  const leftRateForChart = 100 - rateForChart;

  return loginUser ? (
    <div className="items">
      {error && <p className="error-msg">{error}</p>}
      <h1 className="heading">Track it</h1>
      <div className="items__header">
        <div className="items__date">
          <Link to={trackDates[currentIndex + 1] || trackDates[currentIndex] || ''}>
            <AiFillCaretLeft />
          </Link>
          <span>date mm dd yy</span>
          <Link to={trackDates[currentIndex + 1] || trackDates[currentIndex] || ''}>
            <AiFillCaretRight />
          </Link>
        </div>
        <div className="items__overview">
          <div className="items__chart__container">
            <Chart
              width="180px"
              height="180p"
              chartType="PieChart"
              loader={<div className="loader">Loading...</div>}
              data={[['Pac Man', 'Percentage'], ['', rateForChart], ['', leftRateForChart]]}
              options={{
                legend: 'none',
                pieSliceText: 'none',
                pieStartAngle: 0,
                tooltip: { trigger: 'none' },
                slices: {
                  0: { color: '#41b5e8' },
                  1: { color: '#eaeef1' },
                },
              }}
              rootProps={{ 'data-testid': '6' }}
            />
          </div>
          <div className="items__chart__comment">
            {`Achievements rate: ${rateForChart}%`}
          </div>
        </div>
      </div>
      <div className="content">
        <div className="items__list mb3">
          {items.map((item) => {
            const targetTrack = sameDateTracks.find((track) => track.item_id === item.id);
            return (
              <TrackItem
                key={item.id}
                item={item}
                result={targetTrack ? targetTrack.result : 0}
                targetDate={date}
              />
            );
          })}
        </div>
        {msg && <p className="info-msg">{msg}</p>}
        <Link to={`/track/${Number(date)}/edit`} className="btn dark mb3">Edit this track</Link>
        <button type="button" onClick={ } className="btn mb2 warn">Remove this track</button>
        <Link to="/tracks" className="btn">Back to all tracks</Link>
      </div>
    </div>
  ) : <Redirect to="/" />
};

TrackItems.propTypes = {
  addTracks: PropTypes.func,
  addTrackDates: PropTypes.func,
  history: PropTypes.instanceOf(Object),
  sameDateTracks: PropTypes.instanceOf(Array),
  loginUser: PropTypes.bool.isRequired,
  items: PropTypes.instanceOf(Object),
  addItems: PropTypes.func,
  date: PropTypes.number,
  trackDates: PropTypes.instanceOf(Array),
  currentIndex: PropTypes.number,
};

TrackItems.defaultProps = {
  addTracks: null,
  addTrackDates: null,
  history: null,
  sameDateTracks: [],
  items: [],
  addItems: null,
  date: 0,
  trackDates: [],
  currentIndex: -1,
};

export default TrackItems;