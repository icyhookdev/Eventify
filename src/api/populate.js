import axios from 'axios';

export const populate = token =>
  axios.create({
    baseURL: 'https://iujo-eventify-api.herokuapp.com/api/references/',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  // axios.create({
  //   baseURL: 'http://localhost:4000/api/references/',
  //   headers: {
  //     Accept: 'application/json',
  //     Authorization: `Bearer ${token}`,
  //   },
  // });
