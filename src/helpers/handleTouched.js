const handleTouched = values => {
  const keys = Object.keys(values);
  const touchedElements = {};
  keys.forEach(key => (touchedElements[key] = false));
  return touchedElements;
};

export default handleTouched;
