import react, { useState, useEffect } from 'react';
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
import useInput from '../../hooks/useInput';

const SearchFilter = ({
  getTypes,
  getModalities,
  getCountries,
  getStatesByCountry,
  selectsData,
}) => {
  const { values, onChangeHandler } = useInput({
    name: '',
    type: '',
    modality: '',
    country: '',
    state: '',
  });
  return (
    <div className={classes.SearchFilter}>
      <div className={classes.SearchFilterTitle}>Filtrar Eventos</div>
      <form className={classes.SearchFilterForm}>
        <Select
          name="type"
          selected="Tipo"
          options={selectsData.types}
          change={onChangeHandler}
          value={values.type}
        />
        <Select
          name="modality"
          selected="Modalidad"
          options={selectsData.modality}
          change={onChangeHandler}
          value={values.modality}
        />
        <Select
          name="country"
          selected="Pais"
          options={selectsData.country}
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
        <InputGroup label="Nombre del evento" />
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
  }
)(SearchFilter);
