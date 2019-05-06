import React from 'react';

import ProfilePhoto from '../../../components/ProfilePhoto/ProfilePhoto';
import classes from './EditUserProfile.module.css';
import InputGroup from '../../../components/InputGroup/InputGroup';
import TextArea from '../../../components/TextArea/TextArea';
import Select from '../../../components/Select/Select';

const EditUserProfile = () => (
  <div className={classes.container}>
    <div className={classes.title}>Informacion de la Cuenta</div>
    <hr />
    <div className={classes.photo}>
      <div className={classes.subTitle}>Foto de Perfil</div>
      <ProfilePhoto />
    </div>
    <div className={classes.formEmail}>
      <div className={classes.subTitle}>Email</div>
      <InputGroup type="email" label="email" />
    </div>
    <form className={classes.form}>
      <div className={classes.formContact}>
        <div className={classes.subTitle}>Informacion de contacto</div>
        <InputGroup type="text" label="Nombre" />
        <InputGroup type="text" label="Apellido" />
        <InputGroup type="number" label="Telefono" />
        <InputGroup type="text" label="Sitio web" />
        <InputGroup type="date" label="Fecha de nacimiento" />
        <TextArea label="Acerca de ti" />
      </div>

      <div className={classes.formDirection}>
        <div className={classes.subTitle}>Direccion</div>
        <InputGroup type="text" label="Direccion" />
        <InputGroup type="text" label="Direccion 2" />
        <InputGroup type="text" label="Ciudad" />
        <Select selected="Pais" options={['venezuela']} />
        <Select selected="Estado" options={['venezuela']} />
        <InputGroup type="number" label="Codigo Postal" />
      </div>

      <button type="submit" className={classes.btnSubmit}>
        Guargar
      </button>
    </form>
  </div>
);

export default EditUserProfile;
