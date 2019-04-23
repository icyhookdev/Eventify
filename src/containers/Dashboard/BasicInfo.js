import React from 'react';
import NewEvent from '../../components/NewEvent/NewEvent';

const BasicInfo = () => (
  <NewEvent
    startDate={1}
    endDate={2}
    setDateS={3}
    setDateE={4}
    values={5}
    change={3}
    submit={1}
    bbar={1}
    errors={1}
    loading={1}
  />
);

export default BasicInfo;
