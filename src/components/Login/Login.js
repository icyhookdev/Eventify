import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Login.module.css';
import OverLayBg from '../OverLayBg/OverLayBg';
import loginBg from '../../assets/img/login.jpg';
import InputGroup from '../InputGroup/InputGroup';

const Login = () => (
  <div className={classes.Login}>
    <div className={classes.left}>
      <OverLayBg img={loginBg} />
      <h1>Reventsi</h1>
      <h2>Donde conectamos todos tus eventos</h2>
    </div>
    <div className={classes.right}>
      <h2>Iniciar Sesion</h2>
      <p>Inicia sesion para empezar a participar y crear eventos.</p>
      <form className={classes.form}>
        <InputGroup type="email" name="email" label="Email" />
        <InputGroup type="password" name="password" label="Contrasena" />
        <div className={classes.action}>
          <Link to="/register" className="auth auth__link">
            Registrase
          </Link>
          <button type="button" className="auth auth__btn">
            Iniciar sesion
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default Login;
