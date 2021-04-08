import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import Home from '../pages/Home';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/app" component={Home} isPrivate />
    </Switch>
  </BrowserRouter>
);

export default Routes;
