import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import pluralize from 'pluralize';

const TrackForm = ({
  items, targetDate,
}) => {
  const [error, setError] = useState('');
  const [date, setDate] = useState('');
  const [state, setState] = useState('');

  const onDateChange = (e) => {
    setDate(e.target.value);
  }

  const handleInputChange = () => {

  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="track-form mb3">
      display error message here
      <form className="">
        <div className="">
          <input type="date" onChange={onDateChange} value={date} />
        </div>
        <div className="track-form__group mb3">
          {/* {items.map((item) => (
            <div className="track-form__item" key={item.id}>
              <div className="track-form__icon">
                <span className="iconify" data-icon={item.icon} data-inline="false" />
              </div>
              <div className="track-form__title">{item.title}</div>
              <input
                type="number"
                name={item.title}
                className="track-form__input"
                maxLength="4"
                onChange={(e) => handleInputChange(e.target.value, item.id)}
                value={state[item.id]}
              />
              <div className="track-form__unit">plural of units</div>
              <div className="track-form__target">target of item</div>
            </div>
          )) } */}
        </div>
        <button type="submit" className="btn dark">Save</button>
      </form>
    </div>
  );
};

export default TrackForm;