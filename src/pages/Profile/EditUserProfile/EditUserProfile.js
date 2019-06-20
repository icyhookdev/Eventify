import React from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import ProfilePhoto from '../../../components/ProfilePhoto/ProfilePhoto';
import classes from './EditUserProfile.module.css';
import InputGroup from '../../../components/InputGroup/InputGroup';
import TextArea from '../../../components/TextArea/TextArea';
import Select from '../../../components/Select/Select';
import { setUser } from '../../../store/actions/authentication';
import Loading from '../../../components/Loading/Loading';

const EditUserProfile = ({
  values,
  userImg,
  setUser,
  change,
  submit,
  errors,
  selectData,
  date,
  changeDate,
  isLoading,
}) => (
  <div className={classes.container}>
    <div className={classes.title}>Información de la Cuenta</div>
    <hr />
    <div className={classes.photo}>
      <div className={classes.subTitle}>Foto de Perfil</div>
      <ProfilePhoto profilePic={userImg} setUser={setUser} />
    </div>
    <div className={classes.formEmail}>
      <div className={classes.subTitle}>Email</div>
      <InputGroup
        type="email"
        label="email"
        name="email"
        value={values.email}
        readOnly
        change={change}
      />
    </div>
    <form className={classes.form} onSubmit={submit}>
      {isLoading && <Loading msg="Actualizando informacion..." />}
      <div className={classes.formContact}>
        <div className={classes.subTitle}>Información de contacto</div>
        <InputGroup
          type="text"
          label="Nombre"
          name="name"
          value={values.name}
          change={change}
          errMsg={errors.name}
        />
        <Select
          selected="Genero"
          options={selectData.genres}
          name="genre"
          value={values.genre}
          change={change}
          errMsg={errors.genre}
        />
        <InputGroup
          type="text"
          label="Apellido"
          name="lastName"
          value={values.lastName}
          change={change}
          errMsg={errors.lastName}
        />
        <TextArea
          label="Acerca de ti"
          name="aboutMe"
          value={values.aboutMe}
          change={change}
          errMsg={errors.aboutMe}
        />
        <div className={classes.Date__container}>
          <DatePicker
            selected={date}
            onChange={changeDate}
            maxDate={new Date()}
            minDate={new Date('January 01, 1900 00:00:00')}
            placeholderText="Fecha de nacimiento"
          />
          {errors && <p className={classes.err__msg}>{errors.dateOfBirth}</p>}
        </div>
      </div>
      <div className={classes.formDirection}>
        <div className={classes.subTitle}>Dirección</div>
        <InputGroup
          type="text"
          label="Dirección"
          name="address1"
          value={values.address1}
          change={change}
          errMsg={errors.address1}
        />
        <InputGroup
          type="text"
          label="Dirección 2"
          name="address2"
          value={values.address2}
          change={change}
          errMsg={errors.address2}
        />

        <Select
          selected="Pais"
          options={selectData.countries}
          name="country"
          value={values.country}
          change={change}
          errMsg={errors.country}
        />

        <Select
          selected="Estado"
          name="state"
          value={values.state}
          change={change}
          options={(selectData.states && selectData.states.states) || ['state']}
          errMsg={errors.state}
        />
        <InputGroup
          type="text"
          label="Ciudad"
          name="city"
          value={values.city}
          errMsg={errors.city}
          change={change}
        />
        {/* <InputGroup type="number" label="Codigo Postal" /> */}
      </div>

      <button type="submit" className={classes.btnSubmit}>
        Guargar
      </button>
    </form>
  </div>
);

const mapStateToProps = ({ user }) => ({ isLoading: user.isLoading });
export default connect(
  mapStateToProps,
  { setUser }
)(EditUserProfile);
