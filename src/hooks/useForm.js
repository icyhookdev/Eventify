import { useState } from 'react';

const useForm = inputNames => {
  const [values, setValues] = useState(inputNames);

  const onChangeHandler = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return {
    onChangeHandler,
    values,
  };
};

export default useForm;
