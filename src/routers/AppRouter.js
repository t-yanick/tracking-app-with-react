import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import AddTrack from '../pages/AddTrack';
import EditTrack from '../pages/EditTrack';
import TrackList from '../pages/TrackList';
import TrackItems from '../pages/TrackItems';
import Progress from '../pages/Progress';
import More from '../pages/More';
import NotFound from '../pages/NotFound';
import Header from '../components/Header';
import LoginStatus from '../components/LoginStatus';

const AppRouter = () => (
  <BrowserRouter>
    <div className="whole-container">
      <LoginStatus />
      <Header />

      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" render={(props) => (<LoginPage history={props.history} />)} />
          <Route exact path="/signup" render={(props) => (<SignUpPage history={props.history} />)} />
          <Route exact path="/track/create" render={(props) => (<AddTrack history={props.history} />)} />
          <Route exact path="/tracks/:id" component={TrackItems} />
          <Route exact path="/track/:id/edit" component={EditTrack} />
          <Route exact path="/tracks" component={TrackList} />
          <Route exact path="/progress" component={Progress} />
          <Route exact path="/more" component={More} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

AppRouter.propTypes = {
  history: PropTypes.instanceOf(Object),
};

AppRouter.propTypes = {
  history: null,
};

export default AppRouter;