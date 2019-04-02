import React from 'react';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const DatePickerInput = ({ date, change }) => {
  const handleSelect = ranges => {
    change(ranges);
  };
  return <Calendar date={date} onChange={handleSelect} minDate={new Date()} />;
};

export default DatePickerInput;
