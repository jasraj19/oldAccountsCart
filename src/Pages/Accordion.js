
import React, { useState } from 'react';

const Accordion = ({ question, answer}) => {
    const [isActive, setIsActive] = useState(false);

  return (
    <>
    <div className="accordion-item my-3">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className='me-2 plus'>{isActive ? '-' : '+'}</div>
        <div>{question}</div>
      </div>
      {isActive && <div className="accordion-content ps-5">{answer}</div>}
    </div>
    </>
  )
};

export default Accordion