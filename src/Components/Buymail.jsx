import React from 'react'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Buymailslider from "./buymailslider"
function Buymail() {
  return (
    <>
    <section className='buymail'>
        <div className='container-fluid'>
            <div className='bm-head'>
                <h1>Buy Email Accounts</h1>
                {/* <div className='bubble2'>

                </div> */}
                <p>A safe and professional market to buy authentic and verified accounts- Instagram, Twitter, Facebook and more! High Quality social media accounts with 24x7 Customer Support.</p>
            </div>
            <div className='buymail-carousel'>
                <Buymailslider/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Buymail