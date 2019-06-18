import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import UserProfile from '../../pages/Profile/UserProfile';
import getFollowers from '../../lib/getFollowers';

const Profile = ({ user }) => {
  const [followers, setFollowers] = useState(null);
  useEffect(() => {
    unfollowerUsers();
  }, [unfollowerUsers, user]);

  const unfollowerUsers = () => {
    setFollowers(getFollowers(user));
  };

  return <UserProfile user={user} showEdit unFollowUsers={followers} />;
};

const mapStateToProps = ({ auth }) => ({ user: auth.user });

export default connect(
  mapStateToProps,
  {}
)(Profile);
