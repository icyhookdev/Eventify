const checkInitialValues = values => {
  const keys = Object.keys(values);
  const arrBool = [];

  for (const key of keys) {
    if (values[key]) {
      arrBool.push(true);
    } else {
      arrBool.push(false);
    }
  }

  if (arrBool.includes(true)) {
    return true;
  }
  return false;
};

export default checkInitialValues;
