import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';

const AppRouter = () => (
  <BrowserRouter>
    <div className="whole-container">
      Login Status
      Header

      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;