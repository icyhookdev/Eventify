import axios from 'axios';

export const users = axios.create({
  baseURL: 'https://iujo-eventify-api.herokuapp.com/',
});

export const usersWithAuth = token =>
  axios.create({
    baseURL: 'https://iujo-eventify-api.herokuapp.com/api/users',
    headers: { Authorization: `Bearer ${token}` },
  });
