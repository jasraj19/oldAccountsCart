import React, { useState } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import CountUp from "react-countup";
import ScrollTrigger from 'react-scroll-trigger';

const Count = (props) => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
    <section>
        <div className='container counter'>
            <div className='row couter-row'>
              <div className='col-4 col-md-4 col-sm-4 col-xs-4'><h1 className='blue'>{counterOn && <CountUp start={0} end={1800} duration={2} delay={0}/>}+</h1><span className='text'>Completed Projects</span></div>
              <div className='col-4 col-md-4 col-sm-4 col-xs-4'><h1 className='red'>{counterOn && <CountUp start={0} end={253} duration={2} delay={0}/>}+</h1><span className='text'>Expert Workers</span></div>
              <div className='col-4 col-md-4 col-sm-4 col-xs-4'><h1 className='blue'>{counterOn && <CountUp start={0} end={8} duration={2} delay={0}/>}k</h1><span className='text'>Global Customers</span></div>
            </div>
        </div>
    </section>
    </ScrollTrigger>
    </>
  );
};

export default Count;
