import React, { Fragment } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

import classes from './EventRestrictions.module.css';
import TextHeader from '../../../components/TextHeader/TextHeader';
import deniedIco from '../../../assets/icons/denied.svg';
import Checkbox from '../../../components/Checkbox/Checkbox';
import BottomBar from '../../../components/BottomBar/BottomBar';

const EventRestrictions = ({ values, onChange, age, setAge, bbar }) => (
  <div className={classes.EventRestrictions}>
    <TextHeader
      title="Restricciones del evento"
      img={deniedIco}
      description="Agrega restricciones al evento para un publico en especifico solo pueda asistir a el."
    />
    <div className={classes.align__content}>
      <form>
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
            </div>
          </div>
        )}

        {bbar && (
          <BottomBar isLoading={false} msg="Regsitrando restricciones" />
        )}
      </form>
    </div>
  </div>
);

export default EventRestrictions;
