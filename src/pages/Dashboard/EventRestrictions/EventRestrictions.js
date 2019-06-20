import React, { Fragment } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

import classes from './EventRestrictions.module.css';
import TextHeader from '../../../components/TextHeader/TextHeader';
import deniedIco from '../../../assets/icons/denied.svg';
import Checkbox from '../../../components/Checkbox/Checkbox';
import BottomBar from '../../../components/BottomBar/BottomBar';
import Select from '../../../components/Select/Select';
import InputGroup from '../../../components/InputGroup/InputGroup';

const EventRestrictions = ({
  values,
  onChange,
  age,
  setAge,
  bbar,
  onChangeValues,
  genrePopulate,
  inpValues,
  selectData,
  onRemoveGenre,
  submit,
  loading,
}) => (
  <div className={classes.EventRestrictions}>
    <TextHeader
      title="Restricciones del evento"
      img={deniedIco}
      description="Agrega restricciones al evento para un publico en especifico solo pueda asistir a el."
    />
    <div className={classes.align__content}>
      <form onSubmit={submit}>
        <Checkbox
          text="Activar restricciones"
          checked={values.allowRestriction || false}
          name="allowRestriction"
          change={onChange}
        />

        {values.allowRestriction && (
          <div className={classes.restrictions_container}>
            <div className={classes.age}>
              <Checkbox
                text="Activar restricciones por edad"
                checked={values.allowAge || false}
                name="allowAge"
                change={onChange}
              />

              {values.allowAge && (
                <div className={classes.inputsAge}>
                  <Select
                    selected="Tipo de restriccion por edad"
                    options={[
                      { _id: 'age-min', name: 'Edad minima' },
                      { _id: 'age-max', name: 'Edad maxima' },
                      { _id: 'age-range', name: 'Rango de edades' },
                    ]}
                    value={inpValues.AgeSelect}
                    change={onChangeValues}
                    name="AgeSelect"
                  />

                  {inpValues && inpValues.AgeSelect === 'age-range' && (
                    <Fragment>
                      <div className={classes.subTitle}>
                        Selecciona un rango de edades
                      </div>

                      <InputRange
                        maxValue={90}
                        minValue={2}
                        value={age}
                        onChange={value => setAge(value)}
                      />
                    </Fragment>
                  )}
                  {inpValues &&
                    inpValues.AgeSelect !== 'age-range' &&
                    (inpValues.AgeSelect !== '' && (
                      <InputGroup
                        type="number"
                        label="Edad"
                        name="numAge"
                        value={inpValues.numAge}
                        change={onChangeValues}
                      />
                    ))}
                </div>
              )}
            </div>

            <div>
              <Checkbox
                text="Activar restricciones Por genero"
                checked={values.allowGenre || false}
                name="allowGenre"
                change={onChange}
              />

              {values.allowGenre && (
                <div className={classes.inputsAge}>
                  <Select
                    selected="Genero"
                    options={selectData.genres}
                    value={inpValues.genreSelect}
                    change={onChangeValues}
                    name="genreSelect"
                  />

                  <div className={classes.genresPopulate}>
                    {genrePopulate &&
                      genrePopulate.map((genre, i) => (
                        <div key={genre._id} className={classes.genrePop}>
                          {genre.name}{' '}
                          <span onClick={() => onRemoveGenre(i)}>X</span>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {bbar && (
          <BottomBar isLoading={loading} msg="Regsitrando restricciones" />
        )}
      </form>
    </div>
  </div>
);

export default EventRestrictions;
