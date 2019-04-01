import { useState } from 'react';

const useTouched = keys => {
  const [touched, setTouched] = useState(keys);

  const onTouched = e => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  return {
    touched,
    onTouched,
  };
};

export default useTouched;
