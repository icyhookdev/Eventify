import React from 'react';

import classes from './EventGuests.module.css';
import TextHeader from '../../../components/TextHeader/TextHeader';
import peopleIcon from '../../../assets/icons/people.svg';
import InputGroup from '../../../components/InputGroup/InputGroup';
import BottomBar from '../../../components/BottomBar/BottomBar';

const EventGuests = ({
  onChangeEmail,
  onAddEmail,
  guests,
  values,
  loading,
  bbar,
  registerGuests,
  error,
  invitations,
}) => (
  <div className={classes.EventGuests}>
    <TextHeader
      title="Participantes del evento"
      img={peopleIcon}
      description="Dale a conocer a otros participantes las personas interesadas  en asistir"
    />
    <div className={classes.align__content}>
      <div className={classes.guestsContainer}>{invitations}</div>
    </div>
    <TextHeader
      title="Invita a tus participantes"
      img={peopleIcon}
      description="Crea tu lista de invitados que sean notificados una ves el evento sea publicado"
      mt
    />

    <form onSubmit={registerGuests}>
      <div className={classes.align__content}>
        <div className={classes.group}>
          <InputGroup
            type="email"
            name="email"
            label="ingresa el email del participante"
            errMsg={error}
            change={onChangeEmail}
            value={values.email}
          />
          <button
            type="button"
            className={classes.btnAddEmail}
            disabled={!!error}
            onClick={onAddEmail}
          >
            Agregar <div className={classes.addIcon} />
          </button>
        </div>
        <div className={classes.guestsContainer}>{guests}</div>
      </div>
      {bbar && (
        <BottomBar isLoading={loading} msg="Agregando invitados al evento" />
      )}
    </form>
  </div>
);

export default EventGuests;
