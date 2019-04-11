import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import ContentLayout from './components/Layout/ContentLayout/ContentLayout';
import CreateEvent from './containers/CreateEvent/CreateEvent';
import Navbar from './components/Navbar/Navbar';
import TopBar from './components/TopBar/TopBar';
import Events from './containers/Events/Events';
import LoginContainer from './containers/Authentication/LoginContainer';
import SignupContainer from './containers/Authentication/SignupContainer';
import MyEvents from './containers/MyEvents/MyEvents';

const App = () => (
  <Switch>
    <Route path="/login" component={LoginContainer} />
    <Route path="/register" component={SignupContainer} />
    <Layout>
      <Navbar />
      <ContentLayout>
        <TopBar />
        <Route path="/" exact component={Events} />
        <Route path="/new" component={CreateEvent} />
        <Route path="/myevents" component={MyEvents} />
        <Route path="/people" component={() => <h1>hi3</h1>} />
        <Route path="/event/:id" component={() => <h1>hi4</h1>} />
      </ContentLayout>
    </Layout>
  </Switch>
);

export default App;
