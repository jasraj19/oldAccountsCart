import React from "react";
import Footer from "../Components/Footer";
import PricingUpperSec from "./PricingUpperSec";
import { Link } from "react-router-dom";
function Pricing() {

  
  return (
    <>
      <section className="Pricing">
        <PricingUpperSec />
          <div classname="container-fluid">
          <div className="categoryContainer py-2">
          <div className="categoryAccordion px-3 py-2">
          <div className="row">
            <div className="col-md-4">
            <p className="fs-4">Categories</p>
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">Email Accounts</button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body"><button className="border border-white bg-light">Gmail Accounts</button></div>
                  <div class="accordion-body"><button className="border border-white bg-light">Yahoo Accounts</button></div>
                  <div class="accordion-body"><button className="border border-white bg-light">AOL Accounts</button></div>
                  <div class="accordion-body"><button className="border border-white bg-light">OutLook Accounts</button></div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">Social Accounts</button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body"><button className="border border-white bg-light">Pinterest Accounts</button></div>
                <div class="accordion-body"><button className="border border-white bg-light">Facebook Accounts</button></div>
                </div>
              </div>
            </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col"> 
                    
                </div>
              </div>    
            </div>
          </div>
          </div>
          </div>
          </div>
        <Footer />
      </section>
    </>
  );
}

export default Pricing;
