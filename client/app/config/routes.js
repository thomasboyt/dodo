/*
 * Export your react-router routes here.
 */

import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from '../views/App';

export default (
  <Route handler={App}>

    <Route
      path="/"
      component={require('../views/AuthenticatedWrapper').default}>

      <IndexRoute component={require('../views/Home/Handler').default}>

    </Route>

    <Route
      path="/log-in"
      component={require('../views/LogIn/Handler').default} />

  </Route>
);
