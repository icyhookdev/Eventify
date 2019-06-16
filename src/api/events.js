import axios from 'axios';

const events = (token, isAFile) => {
  if (isAFile) {
    return axios.create({
      baseURL: `http://localhost:4000/api/events`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });
  }
  return axios.create({
    baseURL: `http://localhost:4000/api/events`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default events;
