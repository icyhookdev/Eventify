import events from '../../api/events';

export const saveEvent = dataEvent => async dispatch => {
  const token = localStorage.getItem('token');
  try {
    const res = await events(token).post('/register', dataEvent);
    console.log('was register', res);
  } catch (ex) {
    console.log(ex);
  }
};
