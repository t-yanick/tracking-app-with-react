import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../assets/images/notfound.png';

const NotFound = () => (
  <div className="notfound">
    <h1 className="heading">Not Found ... Sorry</h1>
    <div className="content">
      <img src={notFoundImg} alt="Not Found ... Sorry" className="image mb2" />
      <Link to="/" className="btn">Go back to Home</Link>
    </div>
  </div>
);

export default NotFound;
