import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Chart from 'react-google-charts';
import pluralize from 'pluralize';

const Progress = ({
  addTracks, loginUser, addTrackDates, trackDates, tracks, items, addItems
}) => {
  const [error, setError] = useState('');

  const arMonth = getAvgRate(trackDates, tracks, 'THIS_MONTH') || 0;
  const percentForChart = arMonth >= 100 ? 100 : arMonth;
  const leftPercentForChart = 100 - percentForChart;
  return loginUser ? (
    <div className="progress">
      <h1 className="heading">Your Progress</h1>
      <div className="content">
        {error && <p className="error-msg">{error}</p>}
        <div className="progress__header">
          <div className="progress__title">
            Average achievements rate for the last 30 days
          </div>
          <div className="progress__chart__text">
            <span className="txt">You achieved</span>
            <span className="num">{`${arMonth}`}</span>
            <span className="txt">on average</span>
          </div>
          <div className="progress__chart__container">
            <Chart
              width="400px"
              height="400px"
              chartType="PieChart"
              loader={<div className="loader">Loading...</div>}
              data={[['Pac Man', 'Percentage'], ['', percentForChart], ['', leftPercentForChart]]}
              options={{
                legend: 'none',
                pieSliceText: 'none',
                pieStartAngle: 0,
                tooltip: { trigger: 'none' },
                slices: {
                  0: { color: '#86df81' },
                  1: { color: '#eaeef1' },
                },
              }}
              rootProps={{ 'data-testid': '6' }}
            />
          </div>
        </div>
        <div className="progress__graph">
          <div className="progress__title">
            Weekly Achievements Rate (%)
          </div>
          <div className="progress__graph__container">
            <Chart
              width="100%"
              height="200px"
              chartType="Bar"
              loader={<div>Loading Chart</div>}
              data={[
                ['', ''],
                ['This week', getAvgRate(trackDates, tracks, 'THIS_WEEK')],
                ['Last week', getAvgRate(trackDates, tracks, 'LAST_WEEK')],
                ['2 weeks ago', getAvgRate(trackDates, tracks, 'TWO_WEEKS_BEFORE')],
                ['3 weeks ago', getAvgRate(trackDates, tracks, 'THREE_WEEKS_BEFORE')],
                ['Last month', getAvgRate(trackDates, tracks, 'LAST_MONTH')],
              ]}
              rootProps={{ 'data-testid': '2' }}
            />
          </div>
        </div>
        <div className="progress__items mb3">
          {items.map((item) => {
            const itemTotalResult = getItemTotalResult(item, tracks);
            const formattedItemTotal = itemTotalResult.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return (
              <div className="progress__item" key={item.id}>
                <div className="progress__item__title">
                  {item.title}
                </div>
                <div className="progress__item__num">
                  formattedItemTotal
                </div>
                <div className="progress__item__unit">
                  {pluralize(item.unit, itemTotalResult)}
                </div>
              </div>
            );
          })}
        </div>
        <Link to="/progress" className="btn">Share</Link>
      </div>
    </div>
  ) : <Redirect to="/" />
};

Progress.propTypes = {
  addTracks: PropTypes.func,
  addTrackDates: PropTypes.func,
  loginUser: PropTypes.bool.isRequired,
  items: PropTypes.instanceOf(Array),
  tracks: PropTypes.instanceOf(arrayOf),
  addItems: PropTypes.func,
  trackDates: PropTypes.instanceOf(Array),
};

Progress.defaultProps = {
  addTracks: null,
  addTrackDates: null,
  items: [],
  addItems: null,
  trackDates: [],
  tracks: [],
};

export default Progress;