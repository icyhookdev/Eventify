const setInputErrors = values => {
  const errors = {};
  const key = Object.keys(values);

  for (const k of key) {
    if (!values[k]) {
      errors[k] = 'Este Campo es requerido';
    }
  }

  return errors;
};

export default setInputErrors;
