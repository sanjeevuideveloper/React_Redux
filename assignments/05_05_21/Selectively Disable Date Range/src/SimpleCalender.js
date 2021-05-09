import React, { useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { differenceInCalendarDays } from 'date-fns';
function SimpleCalender() {
  const [value, setValue] = useState(new Date());
   const [tomorrow,setT] = useState(new Date().setDate(new Date().getDate()+1));
    const [in3days,setIn3] = useState(new Date().setDate(new Date().getDate()+2))
     const [in5days,setIn5] = useState(new Date().setDate(new Date().getDate()+4))

  
  

const disabledDates = [tomorrow,in3days,in5days];
const tileDisabled=({ date, view })=> {
  // Disable tiles in month view only
  if (view === 'month') {
    
    // Check if a date React-Calendar wants to check is on the list of disabled dates
    return disabledDates.find(dDate => isSameDay(dDate, date));
  }
}
function isSameDay(a, b) {
  return differenceInCalendarDays(a, b) === 0;
}
  function onChange(nextValue) {
    setValue(nextValue);
    let dat1=new Date(nextValue);
    let dat2=new Date(nextValue);
    let dat3=new Date(nextValue);
    dat1.setDate(dat1.getDate()+1);
    setT(dat1);
     dat2.setDate(dat2.getDate()+2);
     setIn3(dat2);
     dat3.setDate(dat3.getDate()+4);
     setIn5(dat3);
  // in3days.setDate(value.getDate()+3);
  // in5days.setDate(value.getDate()+5);
  }

  return (
    <Calendar
      onChange={onChange}
       value={value}
       tileDisabled={tileDisabled}

    />
  );
}
export default SimpleCalender;