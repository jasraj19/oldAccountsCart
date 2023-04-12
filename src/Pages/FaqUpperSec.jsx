import React from 'react'
import Navbar from '../Components/Navbar'
import "./Faq.css";
function FaqUpperSec() {
  return (
    <>
    <div className="FaqUpperSec">
        <Navbar/>
        <div className='bhtext pt-3'>
            <h1 className='pb-4'>Lorem ipsum dolor sit</h1>
            <p className='hometext px-3'>It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years <br/> old. Richard McClintock</p>
            <p className='addressbar pb-3 mb-0'>Home <i class="fa-solid fa-chevron-right"></i> <span>Faq</span></p>
        </div>
    </div>
    </>
  )
}

export default FaqUpperSec