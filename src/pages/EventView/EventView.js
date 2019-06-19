import React from 'react';
import moment from 'moment';
import classes from './EventView.module.css';
import eventImage from '../../assets/img/event-placeholder.png';
import OnlyReadMap from '../../components/Map/OnlyReadMap';
import checkGuests from '../../lib/checkUserEventInscription';

const EventView = ({
  image,
  start_date,
  name,
  finish_date,
  host,
  description,
  address,
  subUser,
  meUser,
  _id,
  unSubUser,
  guests,
}) => (
  <div className={classes.EventView}>
    <div className={classes.container}>
      <div className={classes.containerHeader}>
        <img
          src={(image && image) || eventImage}
          className={classes.containerImage}
          alt="404"
        />
        <div className={classes.containerOwner}>
          <div className={classes.containerOwnerDate}>
            {moment(start_date).format('DD MMM')}
          </div>
          <div className={classes.containerOwnerTitle}>{name}</div>
          <div className={classes.containerOwnerName}>
            By {host && host.name}
          </div>
          {host &&
            host._id !== meUser._id &&
            (checkGuests(guests, meUser._id) && (
              // <button
              //   type="button"
              //   onClick={() => subUser(_id, meUser._id)}
              //   className={classes.subscribe}
              // >
              //   Inscribirse
              // </button>
              <button
                type="button"
                onClick={() => unSubUser(_id)}
                className={classes.subscribe}
              >
                Desinscribirse
              </button>
            ))}
          {console.log(guests && checkGuests(guests, meUser._id))}
          {guests && !checkGuests(guests, meUser._id) && (
            <button
              type="button"
              onClick={() => subUser(_id, meUser._id)}
              className={classes.subscribe}
            >
              Inscribirse
            </button>
          )}
        </div>
      </div>
      <div className={classes.containerBody}>
        <div className={classes.description}>
          <div className={classes.sectionTitle}>Description</div>
          {description && description}
        </div>
        <div className={classes.dateDetails}>
          <div className={classes.contentSection}>
            <div className={classes.sectionTitle}>Fecha</div>
            <div className={classes.text}>
              {moment(start_date).format('DD MMM, YYYY')}
            </div>
            <div className={classes.text}>
              {moment(finish_date).format('DD MMM, YYYY')}
            </div>
          </div>
          <div className={classes.contentSection}>
            <div className={classes.sectionTitle}>Direccion</div>
            <div className={classes.text}>
              {`${address && address[0].description} - ${address &&
                address[1].description}`}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.fullWidthMap}>
        <OnlyReadMap fullWidth />
      </div>
    </div>
  </div>
);

export default EventView;
