import React from 'react';
// import moment from 'moment';
import 'react-datez/dist/css/react-datez.css';
import { ReactDatez } from 'react-datez';

import classes from './NewEvent.module.css';
import Select from '../Select/Select';
import InputGroup from '../InputGroup/InputGroup';
import TextHeader from '../TextHeader/TextHeader';
import SectionWrapper from './SectionWrapper/SectionWrapper';
import BottomBar from '../BottomBar/BottomBar';
import textIcon from '../../assets/icons/text.svg';
import mapIcon from '../../assets/icons/map.svg';
import dateIcon from '../../assets/icons/date.svg';

const NewEvent = ({
  startDate,
  endDate,
  setDateS,
  setDateE,
  values,
  change,
  submit,
  bbar,
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
        />
        <div className={classes.event__group}>
          <Select
            name="type"
            selected="Tipo"
            options={['presencial', 'online']}
            change={change}
            value={values.type}
          />
          <Select
            name="category"
            selected="Categoria"
            options={['Musica', 'online']}
            change={change}
            value={values.category}
          />
          <Select
            name="restriction"
            selected="Restriccion"
            options={['presencial', 'online']}
            change={change}
            value={values.restriction}
          />
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
                <ReactDatez
                  name="startDate"
                  handleChange={setDateS}
                  value={startDate}
                />
              </div>
              <div className={classes.Event__ends}>
                <h3 className={classes.semi_title}>Fin</h3>
                <ReactDatez
                  name="endDate"
                  handleChange={setDateE}
                  value={endDate}
                />
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
              name="place"
              selected="Modalidad del evento"
              options={['presencial', 'online']}
              change={change}
              value={values.place}
            />
            {values.place === 'presencial' && (
              <React.Fragment>
                <div className={classes.address}>
                  <InputGroup
                    name="address1"
                    type="text"
                    label="Direccion 1"
                    value={values.address1}
                    change={change}
                  />
                  <InputGroup
                    name="address2"
                    type="text"
                    label="Direccion 2"
                    value={values.address2}
                    change={change}
                  />
                </div>
                <div className={classes.event__group}>
                  <Select
                    name="country"
                    selected="Country"
                    options={['presencial', 'online']}
                    change={change}
                    value={values.country}
                  />
                  <Select
                    name="state"
                    selected="State"
                    options={['presencial', 'online']}
                    change={change}
                    value={values.state}
                  />
                  <Select
                    name="city"
                    selected="City"
                    options={['presencial', 'online']}
                    change={change}
                    value={values.city}
                  />
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </SectionWrapper>

      {bbar && <BottomBar />}
    </form>
  </div>
);

export default NewEvent;
