import React from 'react';
import { Route } from 'react-router-dom';

import Layout from '../../components/Layout/Layout';
import ContentLayout from '../../components/Layout/ContentLayout/ContentLayout';
import CreateEvent from '../CreateEvent/CreateEvent';
import Navbar from '../../components/Navbar/Navbar';
import TopBar from '../../components/TopBar/TopBar';
import Events from '../Events/Events';

const App = () => (
  <Layout>
    <Navbar />
    <ContentLayout>
      <TopBar />
      <Route path="/" exact component={Events} />
      <Route path="/login" component={() => <h1>hi1</h1>} />
      <Route path="/register" component={() => <h1>hi2</h1>} />
      <Route path="/new" component={CreateEvent} />
      <Route path="/people" component={() => <h1>hi3</h1>} />
      <Route path="/event/:id" component={() => <h1>hi4</h1>} />
    </ContentLayout>
  </Layout>
);

export default App;
