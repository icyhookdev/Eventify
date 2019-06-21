import axios from 'axios';

// const defaultRequest = token =>
//   axios.create({
//     baseURL: 'http://localhost:4000/api',
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

const defaultRequest = token =>
  axios.create({
    baseURL: 'https://iujo-eventify-api.herokuapp.com/api',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export default defaultRequest;
