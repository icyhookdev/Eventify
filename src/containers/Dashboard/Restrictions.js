import React, { useState, useEffect } from 'react';
import EventRestrictions from '../../pages/Dashboard/EventRestrictions/EventRestrictions';
import checkInitialValues from '../../lib/checkInitialValues';

const Restrictions = () => {
  const [values, setValues] = useState({
    allowRestriction: false,
    allowAge: false,
    allowGenre: false,
  });
  const [age, setAge] = useState({ min: 6, max: 18 });
  const [allowGenre, setAllowGenre] = useState(false);
  const [bbar, setBbar] = useState(false);

  useEffect(() => {
    if (checkInitialValues(values)) {
      setBbar(true);
    }
  }, [values]);

  const onChangeOnChecked = e => {
    const { name, checked } = e.target;
    setValues({ ...values, [name]: checked });
  };

  return (
    <EventRestrictions
      values={values}
      onChange={onChangeOnChecked}
      age={age}
      bbar={bbar}
      setAge={setAge}
    />
  );
};

export default Restrictions;
