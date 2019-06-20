import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Select from '../Select/Select';
import InputGroup from '../InputGroup/InputGroup';
import classes from './SearchFilter.module.css';

import {
  getTypes,
  getModalities,
  getCountries,
  getStatesByCountry,
} from '../../store/actions/poputateData';
import { getFilterEvents } from '../../store/actions/events';
import useInput from '../../hooks/useInput';

const SearchFilter = ({
  getTypes,
  getModalities,
  getCountries,
  getStatesByCountry,
  selectsData,
  getFilterEvents,
}) => {
  const { values, onChangeHandler } = useInput({
    name: '',
    type: '',
    modality: '',
    country: '',
    state: '',
  });

  useEffect(() => {
    getTypes();
    getCountries();
    getModalities();
    getModalities();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (values.country) {
      getStatesByCountry(values.country);
    }
    // eslint-disable-next-line
  }, [values.country]);

  const onSubmit = e => {
    e.preventDefault();
    getFilterEvents(1, values);
  };

  return (
    <div className={classes.SearchFilter}>
      <form className={classes.SearchFilterForm} onSubmit={onSubmit}>
        <div className={classes.name}>
          <InputGroup
            label="Nombre del evento"
            type="text"
            name="name"
            value={values.name}
            change={onChangeHandler}
          />
        </div>

        <button type="submit" className={classes.btn_filter}>
          <div className={classes.filterIcon}></div>
          Filtrar
        </button>
        <Select
          name="type"
          selected="Tipo"
          options={selectsData.types || ['test']}
          change={onChangeHandler}
          value={values.type}
        />
        <Select
          name="modality"
          selected="Modalidad"
          options={selectsData.modalities || ['test']}
          change={onChangeHandler}
          value={values.modality}
        />
        <Select
          name="country"
          selected="Pais"
          options={selectsData.countries || ['test']}
          change={onChangeHandler}
          value={values.country}
        />

        <Select
          name="state"
          selected="Estado"
          options={
            (selectsData.states && selectsData.states.states) || ['state']
          }
          change={onChangeHandler}
          value={values.state}
        />
      </form>
    </div>
  );
};

const mapStateToProps = ({ events, populateData }) => ({
  loading: events.loadingFilter,
  selectsData: populateData,
});

export default connect(
  mapStateToProps,
  {
    getTypes,
    getModalities,
    getCountries,
    getStatesByCountry,
    getFilterEvents,
  }
)(SearchFilter);
