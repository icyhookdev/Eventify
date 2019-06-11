import React, { Fragment, useEffect } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from '../../components/Layout/Layout';
import DashboardNav from '../../pages/Dashboard/EventDashboard/DashboardNav/DashboardNav';
import DashboardSideNav from '../../pages/Dashboard/EventDashboard/DashboardSideNav/DashboardSideNav';
import EventDashboard from '../../pages/Dashboard/EventDashboard/EventDashboard';
import BasicInfo from './BasicInfo';
import DashboardLayout from '../../components/Layout/DashboardLayout/DashboardLayout';
import { getEvent, changeStatusEvent } from '../../store/actions/events';
import Details from './Details';
import Guests from './Guests';

const Dashboard = ({ getEvent, match, event, changeStatusEvent }) => {
  const { id } = match.params;

  useEffect(() => {
    getEvent(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <DashboardNav />
      <Layout>
        <DashboardSideNav event={event} />
        <DashboardLayout>
          <Route
            path="/dashboard/:id"
            exact
            component={() => (
              <EventDashboard eventId={id} publishEvent={changeStatusEvent} />
            )}
          />
          <Route path="/dashboard/info/:id" component={BasicInfo} />
          <Route path="/dashboard/details/:id" component={Details} />
          <Route path="/dashboard/guests/:id" component={Guests} />
        </DashboardLayout>
      </Layout>
    </Fragment>
  );
};

const mapStateToProps = ({ events }) => ({ event: events.currentEvent });

export default connect(
  mapStateToProps,
  { getEvent, changeStatusEvent }
)(Dashboard);
