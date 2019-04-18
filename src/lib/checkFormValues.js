const checkFormValues = values => {
  const copyValues = { ...values };
  const keys = Object.keys(values);
  if (copyValues.place === 'online') {
    copyValues.address1 = 'online';
    copyValues.address2 = 'online';
    copyValues.state = 'online';
    copyValues.city = 'online';
    copyValues.country = 'online';
  }
  return keys.map(key => copyValues[key] === '').includes(true);
};

export default checkFormValues;
