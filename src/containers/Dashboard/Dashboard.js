import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Layout from '../../components/Layout/Layout';
import ContentLayout from '../../components/Layout/ContentLayout/ContentLayout';
import DashboardNav from '../../components/EventDashboard/DashboardNav/DashboardNav';
import DashboardSideNav from '../../components/EventDashboard/DashboardSideNav/DashboardSideNav';
import EventDashboard from '../../components/EventDashboard/EventDashboard';

const Dashboard = () => {
  const soem = 'some';

  return (
    <Fragment>
      <DashboardNav />
      <Layout>
        <DashboardSideNav />
        <ContentLayout>
          <Route path="/dashboard" component={EventDashboard} />
        </ContentLayout>
      </Layout>
    </Fragment>
  );
};

export default Dashboard;
