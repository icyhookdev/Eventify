import React from 'react';
import { Route } from 'react-router-dom';

import OverLay from './components/OverLay/OverLay';

export default () => (
  <div>
    <Route path="/" exact component={OverLay} />
    <Route path="/app" component={() => <h1>Appp</h1>} />
    <Route path="/login" component={OverLay} />
    <Route path="/register" component={OverLay} />
  </div>
);
