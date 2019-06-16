import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReduxToastr from 'react-redux-toastr';
import dotenv from 'dotenv';

import App from './App';
import store from './store';
import history from './history';
import './index.css';

dotenv.config();

render(
  <Provider store={store}>
    <Router history={history}>
      <React.Fragment>
        <ReduxToastr
          position="bottom-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
        />
        <App />
      </React.Fragment>
    </Router>
  </Provider>,
  document.querySelector('#root')
);
