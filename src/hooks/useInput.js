import { useState } from 'react';

const useInput = preValues => {
  const [values, setValues] = useState(preValues);
  const onChangeHandler = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return {
    values,
    onChangeHandler,
  };
};

export default useInput;
