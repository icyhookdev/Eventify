import React, { useState } from 'react';

import Login from '../../components/Login/Login';

const LoginContainer = () => {
  const [values, setValues] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState(values);

  const isFormEmpty = ({ email, password }) => !email || !password;

  const isFormValid = ({ email, password }) => email || password;

  const onChangeHandler = e => {
    const emailRgx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { name, value } = e.target;
    const errorsValidate = { ...errors };

    switch (name) {
      case 'email':
        errorsValidate.email = !emailRgx.test(value) ? 'Email invalido' : '';
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
    console.log(errors);
  };

  const validateOnSubmit = () => {
    const { password, email } = values;
    const errorsValidate = { ...errors };
    if (!password) {
      errorsValidate.email = 'This field is required';
    }
    if (!email) {
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
      console.log('yes make the request');
    }
  };

  return (
    <Login
      values={values}
      change={onChangeHandler}
      submit={onSubmitHandler}
      errors={errors}
    />
  );
};

export default LoginContainer;
