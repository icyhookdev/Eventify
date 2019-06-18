import React from 'react';

import classes from './Registers.module.css';
import InputGroup from '../../../components/InputGroup/InputGroup';
import Select from '../../../components/Select/Select';
import AddIco from '../../../components/icons/AddIco';
// import ChartJs from '../../../components/Chart/Chart';

const options = [
  { _id: 1, name: 'Modalidad' },
  { _id: 2, name: 'Genero' },
  { _id: 3, name: 'Tipo' },
];

const Registers = ({ onSubmit, onChange, values, errors }) => (
  <div className={classes.Registers}>
    <div className={classes.page_title}>Agregar Registros</div>
    <form className={classes.form} onSubmit={onSubmit}>
      <InputGroup
        label="Nombre del registro"
        name="name"
        change={onChange}
        value={values.name}
        errMsg={errors.name}
      />
      <Select
        selected="tipo de registro"
        name="registerType"
        options={options}
        change={onChange}
        value={values.registerType}
        errMsg={errors.registerType}
      />
      <button className={classes.form_btn} type="submit">
        Agregar <AddIco />
      </button>
    </form>
    <div className={classes.page_title}>Consultar registros</div>
    <div className={classes.form}>
      <Select
        selected="tipo de registro"
        name="registerTypeSelected"
        options={options}
        change={onChange}
        value={values.registerTypeSelected}
      />
    </div>
    <div className={classes.registers_container}></div>
  </div>
);

export default Registers;
