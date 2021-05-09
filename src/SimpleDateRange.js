import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { isWithinInterval } from "date-fns";
function SimpleDateRange() {
  	 const [date, onChange] = useState(new Date());
 	 const in3Days=new Date();
       in3Days.setDate(in3Days.getDate()
       	+3);
       const in5Days=new Date();
       in5Days.setDate(in5Days.getDate()
       	+5);
       const in13Days=new Date();
       in13Days.setDate(in13Days.getDate()
       	+13);
       const in15Days=new Date();
       in15Days.setDate(in15Days.getDate()
       	+15);

	const disabledRanges = [
 	 [in3Days, in5Days],
  	[in13Days, in15Days],
	];

function tileDisabled({ date, view }) {
  // Add class to tiles in month view only
  if (view === 'month') {
    // Check if a date React-Calendar wants to check is within any of the ranges
    return isWithinRanges(date, disabledRanges);
  }
}
function isWithinRange(date, range) {
  return isWithinInterval(date, { start: range[0], end: range[1] });
}

function isWithinRanges(date, ranges) {
  return ranges.some(range => isWithinRange(date, range));
}
  return (
    <Calendar
      onChange={onChange}
      value={date}
      tileDisabled={tileDisabled}
    />
  );
}
export default SimpleDateRange;