import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import AddTrack from '../pages/AddTrack';
import EditTrack from '../pages/EditTrack';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div className="whole-container">
      Login Status
      <Header />

      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/track/create" component={AddTrack} />
          <Route exact path="/track/:id/edit" component={EditTrack} />
        </Switch>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;