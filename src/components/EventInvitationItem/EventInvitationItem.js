import React from 'react';
import classes from './EventInvitationItem.module.css';

import img from '../../assets/img/dtc_rankings.png';

const EventInvitationItem = ({ image, name, _id, type, cancel, confirm }) => (
  <div className={classes.EventInvitationItem}>
    <img src={img} alt="404" className={classes.EventInvitationItem_img} />
    <div className={classes.EventInvitationItem_details}>
      <div className={classes.left}>
        <div className={classes.left__title}>Fest 2019</div>
        <div className={classes.left__type}>Deoprtes</div>
      </div>
      <div className={classes.right}>
        <button className={classes.confirm}>Y</button>
        <button className={classes.cancel}>C</button>
      </div>
    </div>
  </div>
);

export default EventInvitationItem;
