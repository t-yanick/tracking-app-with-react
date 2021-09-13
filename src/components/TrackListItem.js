import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Chart from 'react-google-charts';
import { GiTrophyCup } from 'react-icons/gi';
import { BiChevronRight } from 'react-icons/bi';

const TrackListItem = ({ milSec, sameDateTrack, itemNum }) => {
  const [dateSign, setDateSign] = useState('');

  return (
    <div className={`tracks__item ${dateSign}`}>
      <div className="tracks__item__sign">{dateSign !== 'lastweek' ? dateSign : ''}</div>
      <Link to={`/tracks/${milSec}`} className="tracks__item__link">
        <div className="tracks__item__graph">
          <Chart
            width="60px"
            height="60px"
            chartType="PieChart"
            loader={<div className="loader">Loading...</div>}
            data={[['Pac Man', 'Percentage'], ['', rateForChart], ['', leftRateForChart]]}
            options={{
              legend: 'none',
              pieStartAngle: 0,
              pieSliceText: 'none',
              tooltip: { trigger: 'nine' },
              slices: {
                0: { color: '#41b5e8' },
                1: { color: '#eaeef1' },
              },
            }}
            rootProps={{ 'data-testid': '6' }}
          />
        </div>
        <div className="tracks__item__date">date format</div>
        <div className="tracks__item__rate">
          {rateForChart >= 100 && (
            <span className="goodjob">
              <GiTrophyCup />
            </span>
          )}
          <span className="rate">{rateForChart}</span>
          %
        </div>
        <div className="tracks__item__toright">
          <BiChevronRight />
        </div>
      </Link>
    </div>
  );
};

TrackListItem.propTypes = {
  milSec: PropTypes.number,
  sameDateTrack: PropTypes.instanceOf(Array),
  itemNum: PropTypes.number,
};

TrackListItem.defaultProps = {
  milSec: 0,
  sameDateTrack: [],
  itemNum: 0,
};

export default TrackListItem;