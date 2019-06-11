import React from 'react';
import { connect } from 'react-redux';

import UserProfile from '../../pages/Profile/UserProfile';

const Profile = ({ user }) => <UserProfile user={user} showEdit />;

const mapStateToProps = ({ auth }) => ({ user: auth.user });

export default connect(mapStateToProps)(Profile);
