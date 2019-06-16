import React from 'react';
import { Link } from 'react-router-dom';

import classes from './UserProfile.module.css';
import img from '../../assets/img/profileImg.png';
import FollowerItem from '../../components/FollowerItem/FollowerItem';

const UserProfile = ({ user, showEdit, followUser }) => (
  <div className={classes.UserProfile}>
    <div className={classes.UserProfile_info}>
      <div className={classes.UserProfile_img}>
        <img src={(user && user.avatar) || img} alt="404" />

        {showEdit && (
          <Link to="/edit-profile" className={classes.edit_profile}>
            Editar Perfil
          </Link>
        )}

        {!showEdit && (
          <button
            className={classes.follow}
            type="button"
            onClick={() => followUser(user._id)}
          >
            Follow
          </button>
        )}
      </div>
      <div className={classes.UserProfile_description}>
        <div className={classes.UserProfile__name}>
          {user && user.name} {user && user.lastName}
        </div>
        <div className={classes.UserProfile__user}>
          @{user && user.username}
        </div>
        <div className={classes.UserProfile__description}>
          {user && user.aboutMe}
        </div>
        <div className={classes.UserProfile__loation}>{user && user.city}</div>
        <div className={classes.UserProfile__company}>Netflix</div>
      </div>

      <div className={classes.newFollowers}>
        <div className={classes.newFollowers_title}>Nuevos seguidores</div>

        <div className={classes.newFollowers_containers}>
          <FollowerItem />
          <FollowerItem />
          <FollowerItem />
          <FollowerItem />
          <FollowerItem />
        </div>
      </div>
    </div>

    <div className={classes.UserProfile_details}>
      <button
        type="button"
        className={[classes.events, classes.link].join(' ')}
      >
        Eventos
      </button>
      <button
        type="button"
        className={[classes.following, classes.link].join(' ')}
      >
        Siguiendo
      </button>
      <button
        type="button"
        className={[classes.followers, classes.link].join(' ')}
      >
        Seguidores
      </button>
    </div>
    <div className={classes.hr} />
    {/* <ProfilePhoto /> */}
  </div>
);

export default UserProfile;
