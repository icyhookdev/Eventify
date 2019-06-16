import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import classes from './MyEventsCard.module.css';
import img from '../../../assets/icons/camera.svg';
import editIcon from '../../../assets/icons/edit.svg';

const EventsCreated = ({
  _id,
  name,
  image,
  copyEvent,
  start_date,
  publish_status,
  cancelEvent,
}) => (
  <div className={classes.EventsCreated}>
    <div className={classes.EventsCreated__card}>
      <div className={classes.card__img}>
        <img src={(image && image) || img} alt="404" />
      </div>
      <div className={classes.card__details}>
        <h1>{name}</h1>
        <p>{start_date && moment(start_date).format('MMM, DD YYYY')} </p>
        <div className={classes.actions_link}>
          <Link to={`/dashboard/${_id}`} className={classes.link}>
            <img src={editIcon} alt="404" />
            Editar
          </Link>
          <button
            type="button"
            className={classes.btn_action}
            onClick={() => copyEvent(_id)}
          >
            <div className={classes.copyicon} />
            Copiar
          </button>
          {publish_status && publish_status === 'published' && (
            <button
              type="button"
              className={classes.btn_action}
              onClick={() => cancelEvent(_id, { status: 'cancelled' })}
            >
              <div className={classes.cancelicon} />
              Cancelar
            </button>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default EventsCreated;
