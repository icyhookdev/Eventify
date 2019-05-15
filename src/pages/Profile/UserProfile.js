import React from 'react';
import { Link } from 'react-router-dom';

import classes from './UserProfile.module.css';
import img from '../../assets/img/user.jpg';

const UserProfile = () => (
  <div className={classes.UserProfile}>
    <div className={classes.UserProfile_info}>
      <div className={classes.UserProfile_img}>
        <img src={img} alt="404" />
        <Link to="/edit-profile" className={classes.edit_profile}>
          Editar Perfil
        </Link>
      </div>
      <div className={classes.UserProfile_description}>
        <div className={classes.UserProfile__name}>Cristihan A.</div>
        <div className={classes.UserProfile__user}>@Cristihan</div>
        <div className={classes.UserProfile__description}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
          quibusdam incidunt reprehenderit quo quod aspernatur praesentium
          ipsam, repellat asperiores quaerat...
        </div>
        <div className={classes.UserProfile__loation}>Caracas, Venezuela</div>
        <div className={classes.UserProfile__company}>Netflix</div>
      </div>
    </div>

    <div className={classes.UserProfile_details}>
      <button className={[classes.events, classes.link].join(' ')}>
        Eventos
      </button>
      <button className={[classes.following, classes.link].join(' ')}>
        Siguiendo
      </button>
      <button className={[classes.followers, classes.link].join(' ')}>
        Seguidores
      </button>
    </div>
    <div className={classes.hr} />
    {/* <ProfilePhoto /> */}
  </div>
);

export default UserProfile;
