import React from 'react';
import { Route } from 'react-router-dom';

import OverLay from './components/OverLay/OverLay';
import App from './containers/App/App';
import Nav from './components/Nav/Nav';

export default () => (
  <div>
    <Nav />
    <Route path="/" exact component={App} />
    <Route path="/app" component={App} />
    <Route path="/login" component={OverLay} />
    <Route path="/register" component={OverLay} />
  </div>
);
