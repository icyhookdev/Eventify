import axios from 'axios';

export const users = axios.create({
  baseURL: 'https://iujo-eventify-api.herokuapp.com/',
});

export const usersWithAuth = (token, isAFileRequest) => {
  if (isAFileRequest) {
    return axios.create({
      baseURL: 'https://iujo-eventify-api.herokuapp.com/api/users',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });
  }
  return axios.create({
    baseURL: 'https://iujo-eventify-api.herokuapp.com/api/users',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
