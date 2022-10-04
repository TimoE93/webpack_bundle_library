import React from 'react';
import ReactDOM from "react-dom";

const Button = (props) => {  
    return (
      <button>Hallo</button>
  )
};

export default function renderComponent(selector){
    const root = ReactDOM.createRoot(
        document.getElementById(selector)
      );
      const btn = <Button></Button>;
      root.render(btn);
}
