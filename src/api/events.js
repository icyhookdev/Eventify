import axios from 'axios';

export default axios.create({
  baseURL: 'https://iujo-eventify-api.herokuapp.com/api/events',
});
