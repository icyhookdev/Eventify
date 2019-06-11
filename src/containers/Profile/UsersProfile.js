import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import UserProfile from '../../pages/Profile/UserProfile';
import { getUser } from '../../store/actions/users';

const UsersProfile = ({ meUser, match, getUser, userProfile }) => {
  const [edit, setEdit] = useState(null);
  useEffect(() => {
    getUser(match.params.id);
  }, [getUser, match.params.id]);

  useEffect(() => {
    showEditProfile();
  });

  const showEditProfile = () => {
    if (meUser && userProfile) {
      setEdit(meUser._id === userProfile._id);
    }
  };

  return <UserProfile user={userProfile} showEdit={edit} />;
};

const mapStateToProps = ({ auth, user }) => ({
  meUser: auth.user,
  userProfile: user.userProfile,
});

export default connect(
  mapStateToProps,
  { getUser }
)(UsersProfile);
