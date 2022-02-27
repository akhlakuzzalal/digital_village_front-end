import { default as React } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calender = () => {
  return (
    <div>
      <Calendar
        showNavigation={false}
        showNeighboringMonth={false}
        value={new Date(2022, 2, 21)}
      />
    </div>
  );
};

export default Calender;
