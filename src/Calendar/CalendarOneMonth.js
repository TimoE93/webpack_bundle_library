import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import Navigation from './Navigation';
import CalendarMonth from './Calendar';

const CalendarOneMonth = (props) => { 

    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(0);
    
    useEffect(() => {
        setMonth(props.month);
        setYear(props.year);
    },[])
    
    const onClickBackHandler = (month, year) => {
        setMonth(month);
        setYear(year);
    }

    const onClickForwardHandler = (month, year) => {
        setMonth(month);
        setYear(year);
    }

    return (
      <>
      {month}/{year}
      <Navigation onClickBack={onClickBackHandler} onClickForward={onClickForwardHandler} month={month} year={year}></Navigation>
      <CalendarMonth month={props.month}></CalendarMonth>
      </>
  )
};

export default function renderComponent(selector, month, year){
    const root = ReactDOM.createRoot(
        document.getElementById(selector)
      );
      const calenderOneMonth = <CalendarOneMonth month={month} year={year}></CalendarOneMonth>;
      root.render(calenderOneMonth);
}