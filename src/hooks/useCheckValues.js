import { useState, useEffect } from 'react';

const useCheckValues = (values, current) => {
  const [change, setChange] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line no-restricted-syntax
    for (const value in values) {
      if (values[value] !== current[value]) {
        setChange(true);
      }
    }
  }, [current, values]);

  return change;
};

export default useCheckValues;
