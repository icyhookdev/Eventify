import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import EventRestrictions from '../../pages/Dashboard/EventRestrictions/EventRestrictions';
import checkInitialValues from '../../lib/checkInitialValues';
import { getGenre } from '../../store/actions/poputateData';
import { updateEvent } from '../../store/actions/events';
import {
  checkRestrictionGenre,
  checkRestrictionAge,
  getAgeRestric,
  getGenreRestricValues,
  getAgeRestricSingleValue,
  getAgeRestricRangeValue,
} from '../../lib/checkRestictions';

const Restrictions = ({
  getGenre,
  selectData,
  updateEvent,
  currentEvent,
  isLoading,
}) => {
  const [values, setValues] = useState({
    allowRestriction: (currentEvent && currentEvent.restrictions) || false,
    allowAge:
      checkRestrictionGenre(currentEvent && currentEvent.restrictions) || false,
    allowGenre:
      checkRestrictionAge(currentEvent && currentEvent.restrictions) || false,
  });
  const [inpValues, setIntValues] = useState({
    numAge:
      getAgeRestricSingleValue(currentEvent && currentEvent.restrictions) || 0,
    AgeSelect: getAgeRestric(currentEvent && currentEvent.restrictions) || '',
    genreSelect: '',
  });
  const [age, setAge] = useState(
    getAgeRestricRangeValue(currentEvent && currentEvent.restrictions) || {
      min: 6,
      max: 18,
    }
  );
  const [genresArr, setGenresArr] = useState(
    getGenreRestricValues(currentEvent && currentEvent.restrictions) || []
  );
  const [genrePopulate, setGenrePopulate] = useState([]);
  const [bbar, setBbar] = useState(false);

  useEffect(() => {
    if (checkInitialValues(values)) {
      setBbar(true);
    }
  }, [values]);

  useEffect(() => {
    getGenre();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    populateGenres();
    // eslint-disable-next-line
  },[genresArr])

  const onChangeOnChecked = e => {
    const { name, checked } = e.target;
    setValues({ ...values, [name]: checked });
  };

  const onChangeValues = e => {
    const { name, value } = e.target;
    if (name === 'genreSelect' && !genresArr.includes(value)) {
      setGenresArr([...genresArr, value]);
    }
    setIntValues({ ...inpValues, [name]: value });
  };

  const populateGenres = () => {
    if (selectData && selectData.genres) {
      const genresPop = selectData.genres.filter(genre =>
        genresArr.includes(genre._id)
      );

      setGenrePopulate(genresPop);
    }
  };

  const onRemoveGenre = id => {
    const newGenreArr = [...genresArr];
    newGenreArr.splice(id, 1);
    setGenresArr(newGenreArr);
  };

  const onSubmit = e => {
    e.preventDefault();

    let restricAge = null;

    if (inpValues.AgeSelect !== 'age-range') {
      restricAge = {
        restrictionType: inpValues.AgeSelect,
        rules: [inpValues.numAge],
      };
    } else {
      restricAge = {
        restrictionType: 'age-range',
        rules: [age.min, age.max],
      };
    }

    const formValues = {
      id: currentEvent && currentEvent._id,
      restrictions: [
        restricAge,
        {
          restrictionType: 'genre',
          restrictTo: genresArr,
        },
      ],
    };

    updateEvent(formValues);
  };

  return (
    <EventRestrictions
      values={values}
      onChange={onChangeOnChecked}
      age={age}
      bbar={bbar}
      loading={isLoading}
      submit={onSubmit}
      selectData={selectData}
      onChangeValues={onChangeValues}
      inpValues={inpValues}
      setAge={setAge}
      genrePopulate={genrePopulate}
      onRemoveGenre={onRemoveGenre}
    />
  );
};

const mapStateToProps = ({ populateData, events }) => ({
  selectData: populateData,
  currentEvent: events.currentEvent,
  isLoading: events.isLoading,
});

export default connect(
  mapStateToProps,
  { getGenre, updateEvent }
)(Restrictions);

// restrictionType
// age-min
// age-max
// age-range
// genre
// cuando es age-min
// mandas un array con un numero que es la edad minima
// igual con age-max
// pero con la edad maxima
// age-range
// mandaras un array con dos items
// [0] es la edad minima
// [1] es la edad maxima
// ej [18, 35]
// y cuando es restrictionType = genre
// agregas en id del genre a restrictTo
// y pueden ser varios generos
// los generos que se agreguen son los permitidos
// los que no, son los generos no permitidos
// id in arr
// arr.indexOf(id)
