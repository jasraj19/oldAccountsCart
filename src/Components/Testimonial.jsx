import React, { Component } from "react";
import Slider from "react-slick";
import {MdKeyboardArrowLeft} from 'react-icons/md'
import {MdKeyboardArrowRight} from 'react-icons/md'

export default class Responsive extends Component {
  state = {
    activeSlide: 0,
    activeSlide2: 1
  };
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      adaptiveHeight: true,
      arrows:false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <section className="Testimonial">
        
          <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          <div className="test_slider d-flex justify-content-center mt-5 mb-5">
              <div className="test-card" >
                <div className="test_img">
                  <img src="Images\Mask group.png" alt="" />
                </div>
                <p className="px-5"> <i class="fa-solid fa-quote-left fa-xl"></i> when they’re honest and objective. Customers find a mix of positive and negative reviews more trustworthy. You can always respond to a review to show the customers that you care and provide additional context. <i class="fa-solid fa-quote-right fa-xl"></i></p>
                <div className="p-line"></div>
                <h1>Steve McCurry</h1>
                <p>Digital Marketing</p>
              </div>
            </div>

            <div className="test_slider d-flex justify-content-center mt-5 mb-5">
              <div className="test-card" >
                <div className="test_img">
                  <img src="Images\Mask group.png" alt="" />
                </div>
                <p className="px-5"> <i class="fa-solid fa-quote-left fa-xl"></i> when they’re honest and objective. Customers find a mix of positive and negative reviews more trustworthy. You can always respond to a review to show the customers that you care and provide additional context. <i class="fa-solid fa-quote-right fa-xl"></i></p>
                <div className="p-line"></div>
                <h1>Steve McCurry</h1>
                <p>Digital Marketing</p>
              </div>
            </div>
          </Slider>
          <div style={{ textAlign: "center" }}>
          <button className="button" onClick={this.previous}>
          <i class="fa-solid fa-circle-arrow-left fa-xl"></i>
          </button>

          <button className="button" onClick={this.next}>
          <i class="fa-solid fa-circle-arrow-right fa-xl"></i>
          </button>
          </div>
        </section>
      </>
    );
  }
}
