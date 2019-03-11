import React from 'react';
import { Route } from 'react-router-dom';

import OverLay from './components/OverLay/OverLay';
import App from './containers/App/App';

export default () => (
  <div>
    <Route path="/" exact component={OverLay} />
    <Route path="/app" component={App} />
    <Route path="/login" component={OverLay} />
    <Route path="/register" component={OverLay} />
  </div>
);
