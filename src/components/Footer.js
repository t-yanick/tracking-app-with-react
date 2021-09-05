import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <nav className="footer__nav">
      <NavLink to="" className="footer__nav__item">
        chart fill
      </NavLink>
      <NavLink to="" className="footer__nav__item">
        check
      </NavLink>
      <NavLink to="" className="footer__nav__item">
        pie chart
      </NavLink>
      <NavLink to="" className="footer__nav__item">
        horizontal rounded
      </NavLink>
    </nav>
  </footer>
);

export default Footer;