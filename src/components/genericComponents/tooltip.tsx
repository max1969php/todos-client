import React from "react";
import  "./../../tooltip.css";

export default function Tooltip({children}: {children: any}, {text}: {text: any} , ...rest: any[] ) {
  const [show, setShow] = React.useState(false);

  return (
    <div>
      <div className="tooltip" style={show ? { visibility: "visible" } : {}}>
        {text}
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
