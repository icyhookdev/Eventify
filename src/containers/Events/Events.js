import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import classes from './Events.module.css';
import EventCard from '../../components/EventCard/EventCard';
import { setUser } from '../../store/actions/authentication';
import { getEventsPublished } from '../../store/actions/events';
import Modal from '../../components/Modal/Modal';
import avatar from '../../assets/img/avatar.png';
import ModalConfirmation from '../../components/Modal/ModalConfirmation';

const Events = ({ history, setUser, getEventsPublished, events, userMe }) => {
  const [open, setOpen] = useState(false);
  const eventsPublished =
    events &&
    events.map(event => (
      <EventCard key={event._id} {...event} userMe={userMe} />
    ));

  useEffect(() => {
    setUser();
  }, [setUser]);

  useEffect(() => {
    getEventsPublished('1');
  }, [getEventsPublished]);
  return (
    <div>
      <div className={classes.title}>Proximos Eventos</div>

      <div className={classes.Events}>{eventsPublished}</div>
      <button onClick={() => setOpen(true)}>open</button>
      {/* <Modal onCloseModal={() => setOpen(false)} show={open}>
        <div className={classes.popup}>
          <img src={avatar} className={classes.popup_img} alt="404" />
          <div className={classes.popup_text}>
            Te damos la bienvenida <strong>{userMe && userMe.name} </strong>.
            Queremos recomendarte que actualizes tu perfil para disfrutar de los
            eventos mas cercanos a ti!.
          </div>
          <Link to="/edit-profile" className={classes.popup_link}>
            Editar perfil
          </Link>
        </div>
      </Modal> */}
      <ModalConfirmation
        onClick={() => setOpen(true)}
        show={open}
        isCancel
        onCloseModal={() => setOpen(false)}
        text="Estas Seguro hacer click en el boton?"
      />
    </div>
  );
};

const mapStateToProps = ({ events, auth }) => ({
  userMe: auth.user,
  events: events.publishedEvents,
});

export default connect(
  mapStateToProps,
  { setUser, getEventsPublished }
)(Events);
