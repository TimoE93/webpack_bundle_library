import React from 'react';

const Navigation = (props) => { 
    console.log(props.month)
    
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