import axios from 'axios';

const events = (token, file) =>
  axios.create({
    baseURL: 'https://iujo-eventify-api.herokuapp.com/api/events',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });

// return axios.create({
//   baseURL: 'https://iujo-eventify-api.herokuapp.com/api/events',
//   headers,
// });
export default events;
