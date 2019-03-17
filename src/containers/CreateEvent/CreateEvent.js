import React from 'react';

import useForm from '../../hooks/useForm';
import classes from './CreateEvent.module.css';
import InputGroup from '../../components/InputGroup/InputGroup';

const CreateEvent = () => {
  const { values, onChangeHandler } = useForm({ email: '' });
  console.log(values);
  return (
    <div className={classes.CreateEvent}>
      <h2>Crear Evento</h2>
      <InputGroup
        type="email"
        name="email"
        label="email"
        errMsg=""
        change={onChangeHandler}
        value={values.email}
      />
    </div>
  );
};

export default CreateEvent;
