import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import InputGroup from '../InputGroup/InputGroup';
import classes from './TopBar.module.css';
import AddIco from '../icons/AddIco';
import messageIco from '../../assets/icons/message.svg';
import messageNotificationIco from '../../assets/icons/messageNotification.svg';
import DropDown from '../DropDown/DropDown';
import EventInvitationItem from '../EventInvitationItem/EventInvitationItem';

const TopBar = ({ signout }) => {
  const [popup, setPopup] = useState(false);

  return (
    <div className={classes.TopBar}>
      {/* <div className={classes.left__side}>
      <InputGroup label="Buscar" />
    </div> */}
      <div className={classes.right__side}>
        <Link to="/new" className={classes.top__btn}>
          <AddIco />
          Crear Evento
        </Link>

        <img
          src={messageIco}
          alt="404"
          className={classes.invitations}
          onClick={() => setPopup(!popup)}
        />

        <DropDown color="#ddd">
          <li onClick={signout}>
            <span>Cerrar Sesion</span>
          </li>
        </DropDown>
      </div>

      {popup && (
        <div className={classes.invitations_container}>
          <div className={classes.userInvitations}>
            <EventInvitationItem />
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBar;
