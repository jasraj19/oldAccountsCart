import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

function Email() {
  return (
    <>
      <section className="email">
        <div className="Container-fluid">
          <div className="em-sec">
            <div className="section-1">
              <h1>Email Marketing</h1>
              <p>
                Email marketing provides an effective connection with your
                targeted audience and gives you the best return on investment.
                Reach out to your current and potential customers and keep them
                updated on your company’s latest deals and news.
              </p>

              <div className="row">
                <div class="container col-8 col-md-6 col-sm-6 col-xs-6">
              
                  <div class="step completed">
                    <div class="v-stepper">
                      <div class="circle"></div>
                      <div class="line"></div>
                    </div>

                    <div class="content">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry. Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry.
                    </div>
                  </div>

                  <div class="step">
                    <div class="v-stepper">
                      <div class="circle"></div>
                      <div class="line"></div>
                    </div>

                    <div class="content">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </div>
                  </div>

                  <div class="step empty">
                    <div class="v-stepper">
                      <div class="circle"></div>
                      <div class="line"></div>
                    </div>

                    <div class="content">
                      {/* Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum is simply dummy text of
                      the printing and typesetting */}
                    </div>
                  </div>

                  <div class="step">
                    <div class="v-stepper">
                      <div class="circle"></div>
                      <div class="line"></div>
                    </div>

                    <div class="content">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry. Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry.
                    </div>
                  </div>
                
                </div>
                <div className="col-6 email-img2">
                  <img src="Images\image.png" alt="" />
                </div>
              </div>
            </div>
            <div className="email-img">
              <img src="Images\image.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Email;
