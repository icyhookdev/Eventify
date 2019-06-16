import React from 'react';
import { connect } from 'react-redux';

import UserProfile from '../../pages/Profile/UserProfile';
import { followUser } from '../../store/actions/users';

const Profile = ({ user, followUser }) => (
  <UserProfile user={user} showEdit followUser={followUser} />
);

const mapStateToProps = ({ auth }) => ({ user: auth.user });

export default connect(
  mapStateToProps,
  { followUser }
)(Profile);
