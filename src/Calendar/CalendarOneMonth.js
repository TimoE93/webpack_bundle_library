import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import Navigation from './Navigation';
import CalendarMonth from './Calendar';

const CalendarOneMonth = (props) => { 

    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(0);
    const [fromDate, setFromDate] = useState(0)
    const [tillDate, setTillDate] = useState(0)
    
    useEffect(() => {
        let displayStartDate = new Date(props.displayDate)
        setMonth(displayStartDate.getMonth());
        setYear(displayStartDate.getFullYear());

        let fromDate = new Date(props.fromDate);
        fromDate.setDate("1");
        setFromDate(fromDate)

        let tillDate = new Date(props.tillDate);
        tillDate.setDate("1");
        setTillDate(tillDate)

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
      {month + 1}/{year}
      <Navigation onClickBack={onClickBackHandler} onClickForward={onClickForwardHandler} month={month} year={year} fromDate={fromDate} tillDate={tillDate}></Navigation>
      <CalendarMonth month={month} year={year}></CalendarMonth>
      </>
  )
};

export default function renderComponent(selector, month, year){
    const root = ReactDOM.createRoot(
        document.getElementById(selector)
      );
      const calenderOneMonth = <CalendarOneMonth displayDate={"2022-10-01"} fromDate={"2021-12-01"} tillDate={"2023-01-01"}></CalendarOneMonth>;
      root.render(calenderOneMonth);
}