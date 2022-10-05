import React, { useState, useEffect } from 'react';
import classes from './CalendarMonth.module.css';

const CalendarMonth = (props) => { 

    const [days, setDays] = useState([]);
    
    useEffect(() => {
        setDays(getDaysForMonthCalendar())
    },[props]);

    const getDaysForMonth = (month, year) => {
        let date = new Date(year, month, 1);
        let days = [];
        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }

        return days
    }

    const getDaysForPreviousMonth = (firstDayOfMonth) => {
        let monthBefore = props.month - 1;
        let year = props.year;
        let days = []
        let daysForCalendar = []
        if ( monthBefore < 0 ) {
            monthBefore = 11;
            year = props.year - 1;
        }

        days = getDaysForMonth(monthBefore, year);
        days = days.reverse()
        for(let i = 0; i < firstDayOfMonth.getDay(); i++ ) {
            daysForCalendar.push(days[i]);
        }

        return daysForCalendar.reverse();
    }

    const getDaysForNextMonth = (lastDayOfMonth) => {
        let monthNext = props.month + 1;
        let year = props.year;
        let days = []
        let daysForCalendar = []
        if ( monthNext > 11 ) {
            monthNext = 0;
            year = props.year + 1;
        }

        days = getDaysForMonth(monthNext, year);
        for(let i = 0; i < (6- lastDayOfMonth.getDay()); i++ ) {
            daysForCalendar.push(days[i]);
        }

        return daysForCalendar;
    }


    const getDaysForMonthCalendar = () => {
        let days = [];
        days = getDaysForMonth(props.month, props.year)
        
        if ( days[0].getDay() > 0 ) {
            days = getDaysForPreviousMonth(days[0]).concat(days)
        }

        if ( days[days.length-1].getDay() < 6 ) {
            days = days.concat(getDaysForNextMonth(days[days.length-1]))
        }
        
        return days; 
    }

    return (
      <div className={classes.calendar}>
          <div className={classes['weekdays-header']}>
              <div className={classes["day-header"]}>So</div>
              <div className={classes["day-header"]}>Mo</div>
              <div className={classes["day-header"]}>Di</div>
              <div className={classes["day-header"]}>Mi</div>
              <div className={classes["day-header"]}>Do</div>
              <div className={classes["day-header"]}>Fr</div>
              <div className={classes["day-header"]}>Sa</div>
          </div>
          <div className={classes["weekdays-days"]}>
            {days.map(day => {
                return (
                  <div className={classes.day}>{day.getDate()}</div>
                );
            })}
          </div>
      </div>
  )
};

export default CalendarMonth;