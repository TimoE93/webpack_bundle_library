import React from 'react';

const Navigation = (props) => { 
    
    const onClickBackHandler = () => {
        
        let monthAfterClick;
        let yearAfterClick;
        if (props.month - 1 < 0) {
            monthAfterClick = 11,
            yearAfterClick = props.year - 1;
        } else {
            monthAfterClick = props.month - 1,
            yearAfterClick = props.year;
        }

        let currentMonth = yearAfterClick + "-" + (monthAfterClick+1) + "-01";
        if (new Date(currentMonth).setHours(0) < props.fromDate.setHours(0) ) {
            return
        } 
        
        props.onClickBack(monthAfterClick, yearAfterClick)
    }

    const onClickForwardHandler = () => {
        
        let monthAfterClick;
        let yearAfterClick;
        if (props.month + 1 > 11) {
            monthAfterClick = 0,
            yearAfterClick = props.year + 1;
        } else {
            monthAfterClick = props.month + 1,
            yearAfterClick = props.year;
        }
        
        let currentMonth = yearAfterClick + "-" + (monthAfterClick+1) + "-01";
        if (new Date(currentMonth).setHours(0) > props.tillDate.setHours(0) ) {
            return
        } 

        props.onClickForward(monthAfterClick, yearAfterClick)
    }
    
    return (
      <div>
          <button onClick={onClickBackHandler}>B</button>
          <button onClick={onClickForwardHandler}>F</button>
      </div>
  )
};

export default Navigation;