import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import UserProfile from '../../pages/Profile/UserProfile';
import getFollowers from '../../lib/getFollowers';
import { getEvents } from '../../store/actions/events';

const Profile = ({ user, getEvents, events }) => {
  const [followers, setFollowers] = useState(null);
  useEffect(() => {
    getEvents();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    unfollowerUsers();

    // eslint-disable-next-line
  }, [user]);

  const unfollowerUsers = () => {
    setFollowers(getFollowers(user));
  };

  return (
    <UserProfile
      user={user}
      showEdit
      unFollowUsers={followers}
      events={events}
    />
  );
};

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
});

export default connect(
  mapStateToProps,
  { getEvents }
)(Profile);
