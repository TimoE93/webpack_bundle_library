import React from 'react';
import classes from './CalendarMonth.module.css';

const CalendarMonth = (props) => { 
    console.log(props.month) 
    return (
      <div className={classes.calendar}>
          <div className={classes['weekdays-header']}>
              <div>So</div>
              <div>Mo</div>
              <div>Di</div>
              <div>Mi</div>
              <div>Do</div>
              <div>Fr</div>
              <div>Sa</div>
          </div>
      </div>
  )
};

export default CalendarMonth;