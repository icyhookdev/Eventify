import axios from 'axios';

const defaultRequest = token =>
  axios.create({
    baseURL: 'https://iujo-eventify-api.herokuapp.com/api',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export default defaultRequest;
