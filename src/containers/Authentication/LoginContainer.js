import React, { useState } from 'react';
import { connect } from 'react-redux';

import Login from '../../components/Login/Login';
import { login } from '../../store/actions/authentication';

const LoginContainer = ({ login, loading }) => {
  const [values, setValues] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState(values);

  const isFormEmpty = ({ username, password }) => !username || !password;

  const isFormValid = ({ username, password }) => username || password;

  const onChangeHandler = e => {
    // const emailRgx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { name, value } = e.target;
    const errorsValidate = { ...errors };

    switch (name) {
      case 'username':
        errorsValidate.email =
          value.length < 4
            ? 'El usuario debe contener almenos 4 caracteres'
            : '';
        break;
      case 'password':
        errorsValidate.password =
          value.length < 5 ? 'Contrasena debe tener almenos 5 caracteres ' : '';
        break;
      default:
        break;
    }

    setValues({ ...values, [name]: value });
    setErrors(errorsValidate);
  };

  const validateOnSubmit = () => {
    const { password, username } = values;
    const errorsValidate = { ...errors };
    if (!password) {
      errorsValidate.username = 'This field is required';
    }
    if (!username) {
      errorsValidate.password = 'This field is required';
    }

    setErrors(errorsValidate);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    if (isFormEmpty(values)) {
      validateOnSubmit();
    } else if (isFormValid(errors)) {
      return true;
    } else {
      login(values);
      console.log('yes make the request');
    }
  };

  return (
    <Login
      values={values}
      change={onChangeHandler}
      submit={onSubmitHandler}
      errors={errors}
      loading={loading}
    />
  );
};

const mapStateToProps = ({ auth }) => ({ loading: auth.isLoading });

export default connect(
  mapStateToProps,
  { login }
)(LoginContainer);
