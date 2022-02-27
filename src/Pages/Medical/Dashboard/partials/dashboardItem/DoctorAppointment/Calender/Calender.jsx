import React from 'react';
import DatePicker from 'sassy-datepicker';
import './Calender.css';

const Calender = ({ onChange }) => {
  // const onChange = (date) => {
  //   console.log(date.toString());
  // };
  return (
    <div>
      <DatePicker onChange={onChange} />
    </div>
  );
};

export default Calender;