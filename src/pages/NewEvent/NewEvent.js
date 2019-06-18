import React from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';

import classes from './NewEvent.module.css';
import Select from '../../components/Select/Select';
import InputGroup from '../../components/InputGroup/InputGroup';
import TextHeader from '../../components/TextHeader/TextHeader';
import SectionWrapper from './SectionWrapper/SectionWrapper';
import BottomBar from '../../components/BottomBar/BottomBar';
import textIcon from '../../assets/icons/text.svg';
import mapIcon from '../../assets/icons/map.svg';
import dateIcon from '../../assets/icons/date.svg';

const NewEvent = ({
  startTime,
  setStartT,
  endTime,
  setEndT,
  startDate,
  endDate,
  setDateS,
  setDateE,
  values,
  change,
  submit,
  bbar,
  errors,
  loading,
  selectsData,
}) => (
  <div className={classes.NewEvent}>
    <form className={classes.form} onSubmit={submit}>
      <TextHeader
        title="Informacion Basica"
        description="Dale nombre a tu evento y dile a los participantes por que deben asistir."
        img={textIcon}
      />
      <div className={classes.align__to_text}>
        <InputGroup
          name="name"
          label="Nombre del Evento"
          change={change}
          value={values.name}
          errMsg={errors.name}
        />
        <div className={classes.event__group}>
          <Select
            name="type"
            selected="Tipo"
            options={selectsData.types}
            change={change}
            value={values.type}
            errMsg={errors.type}
          />
          {/* <Select
            name="category"
            selected="Categoria"
            options={selectsData.categories}
            change={change}
            value={values.category}
            errMsg={errors.category}
          /> */}
          {/* <Select
            name="restriction"
            selected="Restriccion"
            options={selectsData.restrictions}
            change={change}
            value={values.restriction}
            errMsg={errors.restriction}
          /> */}
        </div>
      </div>
      <SectionWrapper>
        <div className={classes.Date}>
          <TextHeader
            title="Fecha y Hora"
            description="Hasle saber a los participantes cuando empieza y termina el evento para que puedan asistir al mismo."
            img={dateIcon}
          />
          <div className={classes.align__to_text}>
            <div className={classes.Date__container}>
              <div className={classes.Event__start}>
                <h3 className={classes.semi_title}>Inicio</h3>
                <DatePicker
                  selected={startDate}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  onChange={setDateS}
                  minDate={new Date()}
                />

                <TimePicker
                  showSecond={false}
                  value={startTime}
                  minuteStep={5}
                  onChange={setStartT}
                />
                {errors && (
                  <p className={classes.err__msg}>{errors.start_date}</p>
                )}
              </div>

              <div className={classes.Event__ends}>
                <h3 className={classes.semi_title}>Fin</h3>
                <DatePicker
                  selected={endDate}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  onChange={setDateE}
                  minDate={new Date()}
                  // placeholderText="Fecha Fianl"
                />
                {/* {errors && (
                  <p className={classes.err__msg}>{errors.finish_date}</p>
                )} */}
                <TimePicker
                  showSecond={false}
                  value={endTime}
                  minuteStep={5}
                  onChange={setEndT}
                />
                {errors && (
                  <p className={classes.err__msg}>{errors.finish_date}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div className={classes.Location}>
          <TextHeader
            title="Lugar"
            description="Ayuda a las personas en el area a descubrir tu evento y deja saber a los participantes donde esta ubicado."
            img={mapIcon}
          />
          <div className={classes.align__to_text}>
            <Select
              name="modality"
              selected="Modalidad del evento"
              options={selectsData.modalities}
              change={change}
              value={values.modality}
              errMsg={errors.modality}
            />
            {/* {values.modality === 'presencial' && ( */}
            <React.Fragment>
              <div className={classes.address}>
                <InputGroup
                  name="address1"
                  type="text"
                  label="Direccion 1"
                  value={values.address1}
                  change={change}
                  errMsg={errors.address1}
                />
                <InputGroup
                  name="address2"
                  type="text"
                  label="Direccion 2"
                  value={values.address2}
                  change={change}
                  errMsg={errors.address2}
                />
              </div>
              <div className={classes.event__group}>
                <Select
                  name="country"
                  selected="Pais"
                  options={selectsData.countries}
                  change={change}
                  value={values.country}
                  errMsg={errors.country}
                />
                <Select
                  name="state"
                  selected="Estado"
                  options={
                    (selectsData.states && selectsData.states.states) || [
                      'state',
                    ]
                  }
                  change={change}
                  value={values.state}
                  errMsg={errors.state}
                />
                <InputGroup
                  name="city"
                  type="text"
                  label="Ciudad"
                  value={values.city}
                  change={change}
                  errMsg={errors.city}
                />
              </div>
            </React.Fragment>
            {/* )} */}
          </div>
        </div>
      </SectionWrapper>

      {bbar && <BottomBar isLoading={loading} />}
    </form>
  </div>
);

export default NewEvent;
