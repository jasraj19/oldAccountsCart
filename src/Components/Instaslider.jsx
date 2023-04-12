import React, { Component } from "react";
import Slider from "react-slick";

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
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 2,
      autoplay:true,
      arrows:false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint:320,
          settings:{
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    };
    return (
      <div className="container slider-slide">
        <Slider ref={(c) => (this.slider = c)} {...settings}>

        <div className="card1">
            <div className="card1inner">
            <div className="mail-img pt-5">
              <a href="#" class="fa fa-instagram"></a>
            </div>
              <h3 className="mt-2" style={{ textAlign: "center",color:"#3b5a9b"}}>Instagram Accounts</h3>
              <p class="card-text mt-3">Delivery Time 12 Hours</p>
                <div className="s-b mt-5 mb-3">
                <button className="btn-1 btn-button mb-5">Read more</button>
                </div>
            </div>
          </div>

          <div className="card1">
            <div className="card1inner">
            <div className="mail-img pt-5">
              <a href="#" class="fa fa-facebook"></a>
            </div>
              <h3 className="mt-2" style={{ textAlign: "center",color:"#3b5a9b"}}>Facebook Accounts</h3>
              <p class="card-text mt-3">Delivery Time 12 Hours</p>
                <div className="s-b mt-5 mb-3">
                <button className="btn-1 btn-button mb-5">Read more</button>
                </div>
            </div>
          </div>

          <div className="card1">
            <div className="card1inner">
            <div className="mail-img pt-5">
              <a href="#" class="fa fa-pinterest"></a>
            </div>
              <h3 className="mt-2" style={{ textAlign: "center",color:"#3b5a9b"}}>Pinterest Accounts</h3>
              <p class="card-text mt-3">Delivery Time 12 Hours</p>
                <div className="s-b mt-5 mb-3">
                <button className="btn-1 btn-button mb-5">Read more</button>
                </div>
            </div>
          </div>

          <div className="card1">
            <div className="card1inner">
            <div className="mail-img pt-5">
              <a href="#" class="fa fa-twitter"></a>
            </div>
              <h3 className="mt-2" style={{ textAlign: "center",color:"#3b5a9b"}}>Twitter Accounts</h3>
              <p class="card-text mt-3">Delivery Time 12 Hours</p>
                <div className="s-b mt-5 mb-3">
                <button className="btn-button btn-1 mb-5">Read more</button>
                </div>
            </div>
          </div>

          <div className="card1">
            <div className="card1inner">
            <div className="mail-img pt-5">
              <a href="#" class="fa fa-youtube"></a>
            </div>
              <h3 className="mt-2" style={{ textAlign: "center",color:"#3b5a9b"}}>Youtube Accounts</h3>
              <p class="card-text mt-3">Delivery Time 12 Hours</p>
                <div className="s-b mt-5 mb-3">
                <button className="btn-button btn-1 mb-5">Read more</button>
                </div>
            </div>
          </div>

          <div className="card1">
            <div className="card1inner">
            <div className="mail-img pt-5">
              <a href="#" class="fa fa-envelope"></a>
            </div>
              <h3 className="mt-2" style={{ textAlign: "center",color:"#3b5a9b"}}>Gmail Accounts</h3>
              <p class="card-text mt-3">Delivery Time 12 Hours</p>
                <div className="s-b mt-5 mb-3">
                <button className="btn-button btn-1 mb-5">Read more</button>
                </div>
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
      </div>
    );
  }
}