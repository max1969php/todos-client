import React from "react";
import "./../../assets/css/tooltip.css";

export default function Tooltip({ children, tooltipText, ...rest }:any) {
  const [show, setShow] = React.useState(false);

  return (
    <div>
      <div className="tooltip" style={show ? { visibility: "visible" } : {}}>
        <h6>{tooltipText}</h6> 
        <span className="tooltip-arrow" />
      </div>
      <div
        {...rest}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
    </div>
  );
}
