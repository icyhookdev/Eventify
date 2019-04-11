import React from 'react';
import { Link } from 'react-router-dom';

import classes from './SignUp.module.css';
import OverLayBg from '../OverLayBg/OverLayBg';
import InputGroup from '../InputGroup/InputGroup';
import loginBg from '../../assets/img/login.jpg';
import Loading from '../Loading/Loading';

const SignUp = ({ values, change, submit, errors, loading }) => (
  <div className={classes.Register}>
    <div className={classes.right}>
      <OverLayBg img={loginBg} />
      <h1>Reventsi</h1>
      <h2>El lugar perfecto para planear tus dias libres</h2>
    </div>
    <div className={classes.left}>
      <h2>Crear Cuenta</h2>
      <p>
        Crea una cuenta para que empiezes a formar parte de esta gran red social
      </p>
      <form className={classes.form} onSubmit={submit}>
        <InputGroup
          type="text"
          name="name"
          label="Nombre"
          change={change}
          value={values.name}
          errMsg={errors.name}
        />
        <InputGroup
          type="text"
          name="username"
          label="Usuario"
          change={change}
          value={values.username}
          errMsg={errors.username}
        />
        <InputGroup
          type="email"
          name="email"
          label="Email"
          change={change}
          value={values.email}
          errMsg={errors.email}
        />
        <InputGroup
          type="password"
          name="password"
          label="Contrasena"
          change={change}
          value={values.password}
          errMsg={errors.password}
        />
        <InputGroup
          type="password"
          name="confirmPassword"
          label="Confirmar contrasena"
          errMsg={errors.confirmPassword}
          change={change}
          value={values.confirmPassword}
        />
        <div className={classes.action}>
          <Link to="/login" className="auth auth__link">
            Iniciar Sesion
          </Link>
          <button type="submit" className="auth auth__btn">
            Registrase
          </button>
        </div>
        {loading && <Loading msg="Registrando usuario..." />}
      </form>
    </div>
  </div>
);

export default SignUp;
