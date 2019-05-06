import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import ContentLayout from './components/Layout/ContentLayout/ContentLayout';
import CreateEvent from './containers/CreateEvent/CreateEvent';
import Navbar from './components/Navbar/Navbar';
import TopBar from './components/TopBar/TopBar';
import Events from './containers/Events/Events';
import LoginContainer from './containers/Authentication/LoginContainer';
import SignupContainer from './containers/Authentication/SignupContainer';
import MyEvents from './containers/MyEvents/MyEvents';
import Dashboard from './containers/Dashboard/Dashboard';
import Profile from './containers/Profile/Profile';
import EditProfile from './containers/Profile/EditProfile';

class App extends React.Component {
  componentDidMount() {
    if (!localStorage.getItem('token')) {
      this.props.history.push('/login');
    } else {
      this.props.history.push('/');
      // this.props.setUser();
    }
  }

  signout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.props.history.push('/login');
  };

  render() {
    return (
      <Switch>
        <Route path="/login" component={LoginContainer} />
        <Route path="/register" component={SignupContainer} />
        <Route path="/dashboard/:id" component={Dashboard} />
        <Layout>
          <Navbar />
          <ContentLayout>
            <TopBar signout={this.signout} />
            <Route path="/" exact component={Events} />
            <Route path="/new" component={CreateEvent} />
            <Route path="/profile" component={Profile} />
            <Route path="/edit-profile" component={EditProfile} />
            <Route path="/myevents" component={MyEvents} />
            <Route path="/people" component={() => <h1>hi3</h1>} />
            <Route path="/event/:id" component={() => <h1>hi4</h1>} />
          </ContentLayout>
        </Layout>
      </Switch>
    );
  }
}
export default withRouter(App);
