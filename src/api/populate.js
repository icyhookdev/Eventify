import axios from 'axios';

export const populate = token =>
  axios.create({
    baseURL: 'https://iujo-eventify-api.herokuapp.com/api/references/',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });
