import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import InputGroup from '../InputGroup/InputGroup';
import classes from './TopBar.module.css';
import AddIco from '../icons/AddIco';
import messageIco from '../../assets/icons/message.svg';
// import messageNotificationIco from '../../assets/icons/messageNotification.svg';
import DropDown from '../DropDown/DropDown';
import EventInvitationItem from '../EventInvitationItem/EventInvitationItem';
import {
  getUserInvitations,
  confirmOrRejectInvitation,
} from '../../store/actions/users';

const TopBar = ({
  signout,
  getUserInvitations,
  invitations,
  user,
  confirmOrRejectInvitation,
}) => {
  const [popup, setPopup] = useState(false);
  const [render, setRender] = useState(null);

  useEffect(() => {
    if (user) {
      getUserInvitations();
    }
    // eslint-disable-next-line
  }, [render]);

  const onHandleInvitation = async (opt, id) => {
    await confirmOrRejectInvitation(opt, id);
    await setRender(Math.floor(Math.random() * 100000000));
    await getUserInvitations();
  };

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
            {invitations &&
              invitations.map((inv, i) => (
                <EventInvitationItem
                  key={i}
                  event={inv && inv.event}
                  confirm={onHandleInvitation}
                  cancel={onHandleInvitation}
                  invId={inv && inv._id}
                />
              ))}
            {console.log(invitations)}

            {invitations.length === 0 && (
              <div
                style={{
                  fontFamily: 'MontserratBold',
                  color: '#fff',
                  fontSize: '24px',
                }}
              >
                No Tienes ninguna invitacion disponible
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ user, auth }) => ({
  invitations: user.userInvitations,
  user: auth.user,
});

export default connect(
  mapStateToProps,
  { getUserInvitations, confirmOrRejectInvitation }
)(TopBar);
