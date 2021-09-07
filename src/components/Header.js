import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = () => {
  const [toggleClass, setToggleClass] = useState('');
  const onToggleMenu = () => {
    setToggleClass(toggleClass === ' active' ? '' : ' active');
  };

  const closeToggleMenu = () => {
    setToggleClass('');
  };

  return (
    <header className="header">
      <div className="header__title-wrap">
        <Link to="/" className="header__title">Track it</Link>
      </div>
      <button type="button" className={`header__toggle${toggleClass}`} onClick={onToggleMenu}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </button>
      <nav className={`header__nav${toggleClass}`}>
        <NavLink exact to="/" className="header__link" onClick={closeToggleMenu}>Home</NavLink>
        <NavLink exact to="/" className="header__link" onClick={closeToggleMenu}>Add Track</NavLink>
        <NavLink exact to="/" className="header__link" onClick={closeToggleMenu}>All Tracks</NavLink>
        <NavLink exact to="/" className="header__link" onClick={closeToggleMenu}>Progress</NavLink>
        <NavLink exact to="/" className="header__link" onClick={closeToggleMenu}>More</NavLink>
      </nav>
    </header>
  );
};

export default Header;