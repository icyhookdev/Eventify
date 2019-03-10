import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import RouterLaout from './RouterLayout';
import './index.css';

render(
  <Router>
    <RouterLaout />
  </Router>,
  document.querySelector('#root')
);
