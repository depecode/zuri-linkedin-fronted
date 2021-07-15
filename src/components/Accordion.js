import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <li className="" onClick={() => setIsActive(!isActive)}>  
        {title}<span>{isActive ? '-' : '+'}</span>
        <div></div>
        {isActive && <div className="">{content}</div>}
    </li>
  );
};

export default Accordion;