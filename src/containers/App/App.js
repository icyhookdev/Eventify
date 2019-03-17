import React from 'react';
import { Route } from 'react-router-dom';

import Layout from '../../components/Layout/Layout';
import ContentLayout from '../../components/Layout/ContentLayout/ContentLayout';
import CreateEvent from '../CreateEvent/CreateEvent';
import Navbar from '../../components/Navbar/Navbar';

const App = () => (
  <Layout>
    <Navbar />
    <ContentLayout>
      <Route path="/" exact component={() => <h1>hi</h1>} />
      <Route path="/login" component={() => <h1>hi1</h1>} />
      <Route path="/register" component={() => <h1>hi2</h1>} />
      <Route path="/new" component={CreateEvent} />
      <Route path="/people" component={() => <h1>hi3</h1>} />
      <Route path="/event/:id" component={() => <h1>hi4</h1>} />
    </ContentLayout>
  </Layout>
);

export default App;
