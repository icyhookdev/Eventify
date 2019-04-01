import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Login.module.css';
import OverLayBg from '../OverLayBg/OverLayBg';
import loginBg from '../../assets/img/login.jpg';
import InputGroup from '../InputGroup/InputGroup';

const Login = ({ values, change, submit, errors, touch, disable }) => (
  <div className={classes.Login}>
    <div className={classes.left}>
      <OverLayBg img={loginBg} />
      <h1>Reventsi</h1>
      <h2>Donde conectamos todos tus eventos</h2>
    </div>
    <div className={classes.right}>
      <h2>Iniciar Sesion</h2>
      <p>Inicia sesion para empezar a participar y crear eventos.</p>
      <form className={classes.form} onSubmit={submit}>
        <InputGroup
          type="email"
          name="email"
          label="Email"
          value={values.email}
          change={change}
          errMsg={errors.email}
          touched={touch}
        />
        <InputGroup
          type="password"
          name="password"
          label="Contrasena"
          value={values.password}
          change={change}
          errMsg={errors.password}
          touched={touch}
        />
        <div className={classes.action}>
          <Link to="/register" className="auth auth__link">
            Registrase
          </Link>
          <button disabled={disable} type="submit" className="auth auth__btn">
            Iniciar sesion
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default Login;
