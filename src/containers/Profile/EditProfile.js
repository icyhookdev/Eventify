import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import EditUserProfile from '../../pages/Profile/EditUserProfile/EditUserProfile';
import useInput from '../../hooks/useInput';
import { updateUser } from '../../store/actions/users';
import checkFormValues from '../../lib/checkFormValues';
import setInputErrors from '../../lib/setinputErrors';
import {
  getCountries,
  getStatesByCountry,
  getGenre,
} from '../../store/actions/poputateData';

const EditProfile = ({
  user,
  updateUser,
  getCountries,
  selectData,
  getStatesByCountry,
  getGenre,
}) => {
  const [errors, setErrors] = useState({});
  const [birthDate, setBirthDate] = useState(
    (user && new Date(user.birthDate)) || null
  );
  const { values, onChangeHandler } = useInput({
    name: (user && user.name) || '',
    lastName: (user && user.lastName) || '',
    email: (user && user.email) || '',
    country: (user && user.country && user.country._id) || '',
    aboutMe: (user && user.aboutMe) || '',
    state: (user && user.state) || '',
    city: (user && user.city) || '',
    genre: (user && user.genre) || '',
    address1: (user && user.address[0] && user.address[0].description) || '',
    address2: (user && user.address[1] && user.address[1].description) || '',
  });

  useEffect(() => {
    getCountries();
    getGenre();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (values.country) {
      getStatesByCountry(values.country);
    }
    // eslint-disable-next-line
  }, [values.country]);

  const handleDateChange = sd => setBirthDate(sd);

  const onSubmit = e => {
    e.preventDefault();
    const formValuesCheck = {
      name: values.name,
      lastName: values.lastName,
      // email: values.email,
      aboutMe: values.aboutMe,
      country: values.country,
      state: values.state,
      genre: values.genre,
      city: values.city,

      birthDate,
      address1: values.address1,
      address2: values.address2,
    };

    if (checkFormValues(formValuesCheck)) {
      setErrors(setInputErrors(formValuesCheck));
    } else {
      const formValues = {
        name: values.name,
        lastName: values.lastName,
        // email: values.email,
        aboutMe: values.aboutMe,
        first_login: false,
        genre: values.genre,
        birthDate,
        country: values.country,
        state: values.state,
        city: values.city,
        address: [
          { description: values.address1 },
          { description: values.address2 },
        ],
        id: user && user._id,
      };
      updateUser(formValues);
    }
  };

  return (
    <EditUserProfile
      userImg={user && user.avatar}
      values={values}
      errors={errors}
      change={onChangeHandler}
      submit={onSubmit}
      selectData={selectData}
      changeDate={handleDateChange}
      date={birthDate}
    />
  );
};

const mapStateToProps = ({ auth, populateData }) => ({
  user: auth.user,
  selectData: populateData,
});

export default connect(
  mapStateToProps,
  { updateUser, getCountries, getStatesByCountry, getGenre }
)(EditProfile);
