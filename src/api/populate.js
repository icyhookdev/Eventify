import axios from 'axios';

export const populate = token =>
  axios.create({
    baseURL: 'http://localhost:4000/api/references/',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
