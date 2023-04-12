import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Instaslider from "./Instaslider";
function Banner() {
  return (
    <>
      <section className="banner">
        <div className="container-fluid">
         <div className="buy_sm">
            <h1>Buy Social Media Accounts</h1>
         </div>
        </div>
        <div className="buy_p">
            <p>Quick and Secure Marketplace To Buy E-mail and Social Media Accounts</p>
        </div>
        <div className="company-carousel">
          <Instaslider />
        </div>
      </section>
    </>
  );
}

export default Banner;
