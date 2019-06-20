import React, { Fragment } from 'react';

import classes from './EventPrivacy.module.css';
import TextHeader from '../../../components/TextHeader/TextHeader';
import privacyIco from '../../../assets/icons/privacy.svg';
import Checkbox from '../../../components/Checkbox/Checkbox';
import BottomBar from '../../../components/BottomBar/BottomBar';

const EventPrivacy = ({ values, onChange, bbar, submit, loading }) => (
  <div className={classes.EventPrivacy}>
    <TextHeader
      title="Privacidad del evento"
      img={privacyIco}
      description="Agrega privacidad a tu evento de manera tal, que solo tu escogas quien asistira"
    />
    <div className={classes.align__content}>
      <form onSubmit={submit}>
        <Checkbox
          text="Privado"
          checked={values.private || false}
          name="private"
          change={onChange}
        />
        {values.private && (
          <Checkbox
            text="Permitir que otros usuarios puedan enviar invitaciones sobre el evento"
            checked={values.allowInvitations || false}
            name="allowInvitations"
            change={onChange}
          />
        )}

        {bbar && (
          <BottomBar isLoading={loading} msg="Protegiendo el evento..." />
        )}
      </form>
    </div>
  </div>
);

export default EventPrivacy;
