import React from 'react';
import { Link } from 'react-router-dom';

import classes from './EventInvitationItem.module.css';

import img from '../../assets/img/dtc_rankings.png';

const EventInvitationItem = ({ event, cancel, confirm, invId }) => (
  <div className={classes.EventInvitationItem}>
    <img
      src={(event && event.image) || img}
      alt="404"
      className={classes.EventInvitationItem_img}
    />
    <div className={classes.EventInvitationItem_details}>
      <div className={classes.left}>
        <Link
          style={{ textDecoration: 'none', color: '#000' }}
          to={`/event/${event && event._id}`}
        >
          <div className={classes.left__title}>{event && event.name}</div>
        </Link>
      </div>
      <div className={classes.right}>
        <button
          type="button"
          className={classes.confirm}
          onClick={() => confirm('1', invId)}
        >
          <div className={classes.icoCheck} />
        </button>
        <button
          type="button"
          className={classes.cancel}
          onClick={() => cancel('2', invId)}
        >
          <div className={classes.icoCancel} />
        </button>
      </div>
    </div>
  </div>
);

export default EventInvitationItem;
