import React from 'react';
import moment from 'moment';

import classes from './NewEvent.module.css';
import Select from '../Select/Select';
import InputGroup from '../InputGroup/InputGroup';
import TextHeader from '../TextHeader/TextHeader';
import SectionWrapper from './SectionWrapper/SectionWrapper';
// import DatePicker from 'react-date-picker';
import DatePickerInput from '../DatePicker/DatePickerInput';
import Button from '../Button/Button';

const NewEvent = ({ startDate, endDate, setDateS, setDateE }) => (
  <div className={classes.NewEvent}>
    <form className={classes.form}>
      <TextHeader
        title="Informacion Basica"
        description="Dale nombre a tu evento y dile a los participantes por que deben asistir."
      />
      <InputGroup label="Nombre del Evento" />
      <div className={classes.event__group}>
        <Select selected="Tipo" options={['presencial', 'online']} />
        <Select selected="Categoria" options={['Musica', 'online']} />
        <Select selected="Restriccion" options={['presencial', 'online']} />
      </div>
      <SectionWrapper>
        <div className={classes.Location}>
          <TextHeader
            title="Lugar"
            description="Ayuda a las personas en el area a descubrir tu evento y deja saber a los participantes donde esta ubicado."
          />
          <Select
            selected="Modalidad del evento"
            options={['presencial', 'online']}
          />
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div className={classes.Date}>
          <TextHeader
            title="Fecha y Hora"
            description="Hasle saber a los participantes cuando empieza y termina el evento para que puedan asistir al mismo."
          />
          <div className={classes.Date__container}>
            <div className={classes.Event__start}>
              <h3 className={classes.semi_title}>Inicio del Evento</h3>
              <InputGroup
                type="text"
                name="startDate"
                disable
                value={moment(startDate).format('L')}
              />
              <InputGroup type="time" name="startTime" />
              <DatePickerInput date={startDate} change={setDateS} />;
            </div>

            <div className={classes.Event__ends}>
              <h3 className={classes.semi_title}>Fin del Evento</h3>
              <InputGroup
                type="text"
                name="endDate"
                disable
                value={moment(endDate).format('L')}
              />
              <InputGroup type="time" name="endTime" />
              <DatePickerInput date={endDate} change={setDateE} />;
            </div>
          </div>
        </div>
      </SectionWrapper>

      <div className={classes.group}>
        <div className={classes.group__btn}>
          <Button type="button" buttonClass="cancel" text="Cancelar" />
          <Button type="submit" buttonClass="action" text="Guardar" />
        </div>
      </div>
    </form>
  </div>
);

export default NewEvent;
