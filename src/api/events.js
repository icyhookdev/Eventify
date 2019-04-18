import axios from 'axios';

const events = token =>
  axios.create({
    baseURL: 'https://iujo-eventify-api.herokuapp.com/api/events',
    headers: { Authorization: `Bearer ${token}` },
  });

export default events;
