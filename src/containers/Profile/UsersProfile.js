import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import UserProfile from '../../pages/Profile/UserProfile';
import {
  getUser,
  getUserFollowers,
  getUserFollowings,
} from '../../store/actions/users';
import { getEvents } from '../../store/actions/events';
// import getFollowers from '../../lib/getFollowers';

const UsersProfile = ({
  meUser,
  match,
  getUser,
  userProfile,
  getEvents,
  events,
  getUserFollowers,
  userFollowers,
  userFollowing,
  getUserFollowings,
}) => {
  const [edit, setEdit] = useState(null);
  const [following, setFollowing] = useState(false);
  useEffect(() => {
    getEvents();
  }, [getEvents]);

  useEffect(() => {
    getUser(match.params.id);
    // eslint-disable-next-line
  }, [match.params.id]);

  useEffect(() => {
    getUser(match.params.id);
    // eslint-disable-next-line
  }, [meUser]);

  useEffect(() => {
    getUserFollowers(userProfile && userProfile._id);
    getUserFollowings(userProfile && userProfile._id);
    // eslint-disable-next-line
  }, [meUser]);

  useEffect(() => {
    showEditProfile();
    onShowFollowStatus();
  });

  const showEditProfile = () => {
    if (meUser && userProfile) {
      setEdit(meUser._id === userProfile._id);
    }
  };

  const onShowFollowStatus = () => {
    const followingStatus =
      userProfile &&
      userProfile.followers.find(user => meUser._id === user._id);

    if (followingStatus) {
      setFollowing(true);
    } else {
      setFollowing(false);
    }
  };

  return (
    <UserProfile
      user={userProfile}
      showEdit={edit}
      following={following}
      event={events}
      userFollowers={userFollowers}
      userFollowing={userFollowing}
    />
  );
};

const mapStateToProps = ({ auth, user, events }) => ({
  meUser: auth.user,
  userProfile: user.userProfile,
  events: events.userEvents,
  userFollowers: user.userFollowers,
  userFollowing: user.userFollowing,
});

export default connect(
  mapStateToProps,
  { getUser, getEvents, getUserFollowers, getUserFollowings }
)(UsersProfile);
