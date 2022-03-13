import React from 'react';
import DatePicker from 'sassy-datepicker';
import './Calender.css';

const Calender = ({ onChange }) => {
  // const onChange = (date) => {
  //   console.log(date.toString());
  // };
  return (
    <div className="w-[600px]">
      <DatePicker onChange={onChange} className="dark:dark-card-bg" />
    </div>
  );
};

export default Calender;
