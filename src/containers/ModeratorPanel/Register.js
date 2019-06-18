import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  createType,
  createModality,
  createCategory,
  createGenre,
} from '../../store/actions/poputateData';
import setInputErrors from '../../lib/setinputErrors';
import Registers from '../../pages/Moderator/Registers/Registers';

const Register = ({
  createType,
  createModality,
  createCategory,
  createGenre,
}) => {
  const [values, setValues] = useState({
    name: '',
    registerType: null,
    registerTypeSelected: '',
  });

  const [errors, setErrors] = useState({});

  const onChangeHandler = e => {
    const { name, value } = e.target;
    const errorsValidate = errors;
    switch (name) {
      case 'name':
        errorsValidate.name =
          value.length < 3 ? 'This field should have atleast 3 characters' : '';
        break;
      case 'registerType':
        errorsValidate.registerType = !value.length
          ? 'This field should have atleast 3 characters'
          : '';
        break;
      default:
        break;
    }

    setValues({ ...values, [name]: value });
    setErrors(errorsValidate);
  };

  const isFormEmpty = ({ name, registerType }) => !name || !registerType;

  const isFormInvalid = ({ name, registerType }) => name || registerType;

  const onSubmitHandler = async e => {
    e.preventDefault();

    if (isFormEmpty(values)) {
      setErrors(setInputErrors(values));
    } else if (isFormInvalid(errors)) {
      return true;
    } else {
      if (values.registerType === '1') {
        createModality([{ type: 'modality', name: values.name, parent: null }]);
        setValues({ ...values, name: '', registerType: null });
        return;
      }
      if (values.registerType === '2') {
        createGenre([{ type: 'genre', name: values.name, parent: null }]);
        setValues({ ...values, name: '', registerType: null });
        return;
      }
      if (values.registerType === '3') {
        createType([{ type: 'type', parent: null, name: values.name }]);
        setValues({ ...values, name: '', registerType: null });
      }

      // if (res.login) {
      //   history.push('/');
      // } else if (res.error.code === 'auth/user-not-found') {
      //   setErrors({ email: 'This email is not register' });
      // } else {
      //   setErrors({ password: 'Wrong password' });
      // }
    }
  };

  return (
    <Registers
      values={values}
      errors={errors}
      onChange={onChangeHandler}
      onSubmit={onSubmitHandler}
      // onCreateType={createType}
      // onCreateModality={createModality}
      // onCreateCategory={createCategory}
      // onCreateGenre={createGenre}
    />
  );
};

export default connect(
  null,
  { createType, createModality, createCategory, createGenre }
)(Register);
