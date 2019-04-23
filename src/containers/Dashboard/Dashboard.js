import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Layout from '../../components/Layout/Layout';

import DashboardNav from '../../components/EventDashboard/DashboardNav/DashboardNav';
import DashboardSideNav from '../../components/EventDashboard/DashboardSideNav/DashboardSideNav';
import EventDashboard from '../../components/EventDashboard/EventDashboard';
import BasicInfo from './BasicInfo';
import DashboardLayout from '../../components/Layout/DashboardLayout/DashboardLayout';

const Dashboard = () => {
  const soem = 'some';

  return (
    <Fragment>
      <DashboardNav />
      <Layout>
        <DashboardSideNav />
        <DashboardLayout>
          <Route path="/dashboard" exact component={EventDashboard} />
          <Route path="/dashboard/info" component={BasicInfo} />
        </DashboardLayout>
      </Layout>
    </Fragment>
  );
};

export default Dashboard;
