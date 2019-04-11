import React, { useState } from 'react';
import { connect } from 'react-redux';

import SignUp from '../../components/SignUp/SignUp';
import { registerUser } from '../../store/actions/authentication';

const SignupContainer = ({ registerUser, loading, history }) => {
  const [values, setValues] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState(values);

  const emailRgx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const onChangeHandler = e => {
    const { name, value } = e.target;
    const errorsValidate = { ...errors };
    switch (name) {
      case 'name':
        errorsValidate.name =
          value.length < 4 ? 'El nombre debe tener almenos 4 caracteres' : '';
        break;
      case 'email':
        errorsValidate.email = !emailRgx.test(value) ? 'Email invalido' : '';
        break;
      case 'password':
        errorsValidate.password =
          value.length < 5 ? 'Contrasena debe tener almenos 5 caracteres ' : '';
        break;
      case 'confirmPassword':
        errorsValidate.confirmPassword =
          value !== values.password ? 'Las contransenas no son iguales' : '';
        break;
      default:
        break;
    }

    setValues({ ...values, [name]: value });
    setErrors(errorsValidate);
  };

  const validateOnSubmit = () => {
    const { password, email, name, confirmPassword } = values;
    const errorsValidate = { ...errors };
    if (!password) {
      errorsValidate.email = 'This field is required';
    }
    if (!email) {
      errorsValidate.password = 'This field is required';
    }

    if (!name) {
      errorsValidate.name = 'This field is required';
    }
    if (!confirmPassword) {
      errorsValidate.confirmPassword = 'This field is required';
    }

    setErrors(errorsValidate);
  };

  const isFormEmpty = ({ email, password, name, confirmPassword }) =>
    !email || !password || !name || !confirmPassword;

  const isFormValid = ({ email, password, name, confirmPassword }) =>
    email || password || name || confirmPassword;

  const onSubmitHandler = e => {
    e.preventDefault();
    const { name, username, email, password } = values;
    const userData = {
      name,
      username,
      email,
      password,
    };

    if (isFormEmpty(values)) {
      validateOnSubmit();
    } else if (isFormValid(errors)) {
      return true;
    } else {
      registerUser(userData)
        .then(res => history.push('/login'))
        .catch(ex => {
          console.log(ex);

          const err = { ...errors };
          // TODO: a if to validate the code err and display a message
          err.email = 'Email no disponible';
          setErrors(err);
          console.log(ex);
        });
    }
  };
  return (
    <SignUp
      submit={onSubmitHandler}
      change={onChangeHandler}
      values={values}
      errors={errors}
      loading={loading}
    />
  );
};

const mapStateToProps = ({ auth }) => ({ loading: auth.isLoading });

export default connect(
  mapStateToProps,
  { registerUser }
)(SignupContainer);
