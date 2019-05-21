import React from 'react';
import Dropzone from 'react-dropzone';
import classes from './EventDetails.module.css';
import TextHeader from '../../../components/TextHeader/TextHeader';
import imgIcon from '../../../assets/icons/image.svg';
import textIcon from '../../../assets/icons/text.svg';
import TextArea from '../../../components/TextArea/TextArea';
import BottomBar from '../../../components/BottomBar/BottomBar';

const EventDetails = ({
  onDrop,
  img,
  onRemove,
  values,
  onChange,
  bbar,
  loading,
  submit,
}) => (
  <div className={classes.EventDetails}>
    <form onSubmit={submit}>
      <TextHeader
        title="Imagen Principal del Evento"
        description="Esta es la primera imagen que los Usuarios veran. Se recomiendo que la imagen sea Landscape 1920x1080px"
        img={imgIcon}
      />

      {img() ? (
        <div className={classes.img_preview_container}>
          <img src={img()} className={classes.img_preview} alt="404" />

          <div className={classes.overlay}>
            <div className={classes.remove__img} onClick={onRemove} />
          </div>
        </div>
      ) : (
        <Dropzone className={classes.drag} onDrop={onDrop} multiple>
          <div className={classes.info}>
            <img src={imgIcon} alt="not found" />
            <div>
              Arrastra y Suelta o selecciona una imagen para el evento Principal
            </div>
          </div>
        </Dropzone>
      )}
      <TextHeader
        title="Descripcion"
        description="Agrega mas detalles a tu evento como la programacion, patrocinadores, o invitados especiales."
        img={textIcon}
        mt
      />
      <div className={classes.align__content}>
        <TextArea
          label="Escribe un pequeno resumen acerca el evento para mantener a los participantes emocionados."
          name="description"
          change={onChange}
          value={values.description}
        />
      </div>
      {bbar && <BottomBar isLoading={loading} msg="Actualizando Evento" />}
    </form>
  </div>
);

export default EventDetails;
