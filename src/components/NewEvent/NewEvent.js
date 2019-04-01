import React from 'react';

import classes from './NewEvent.module.css';
import Select from '../Select/Select';
import InputGroup from '../InputGroup/InputGroup';
import TextHeader from '../TextHeader/TextHeader';
import SectionWrapper from './SectionWrapper/SectionWrapper';

const NewEvent = () => (
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
            <InputGroup type="date" />
            <InputGroup type="date" />
          </div>
        </div>
      </SectionWrapper>
    </form>
  </div>
);

export default NewEvent;
