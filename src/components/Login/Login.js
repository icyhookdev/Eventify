import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Login.module.css';
import OverLayBg from '../OverLayBg/OverLayBg';
import loginBg from '../../assets/img/login.jpg';
import InputGroup from '../InputGroup/InputGroup';
import Loading from '../Loading/Loading';

const Login = ({ values, change, submit, errors, touch, loading }) => (
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
          type="text"
          name="username"
          label="Username"
          value={values.username}
          change={change}
          errMsg={errors.username}
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
          <button type="submit" className="auth auth__btn">
            Iniciar sesion
          </button>
        </div>
        {loading && <Loading msg="Logeando usuario..." />}
      </form>
    </div>
  </div>
);

export default Login;
