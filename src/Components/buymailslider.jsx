import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true  ,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 2,
      autoplay:true,
      adaptiveHeight:true,
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
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div className="Cards2 pt-4">
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>

        <div className="cardcontent">
            <div className="cardcontentinner">
            <div className="mail-img pt-5">
              <a href="#" class="fa fa-envelope"></a>
            </div>
              <h3 className="mt-2" style={{ textAlign: "center",color:"#3b5a9b"}}>Gmail Accounts</h3>
              <p class="card-text mt-3">Delivery Time 12 Hours</p>
                <div className="s-b mt-5 mb-4">
                <button className="btn-1 btn-button">Read more</button>
                </div>
            </div>
          </div>

          <div className="cardcontent">
            <div className="cardcontentinner">
            <div className="mail-img pt-5">
              <a href="#" class="fa fa-envelope"></a>
            </div>
              <h3 className="mt-2" style={{ textAlign: "center",color:"#3b5a9b"}}>Gmail Accounts</h3>
              <p class="card-text mt-3">Delivery Time 12 Hours</p>
                <div className="s-b mt-5 mb-4">
                <button className="btn-1 btn-button">Read more</button>
                </div>
            </div>
          </div>

          <div className="cardcontent">
            <div className="cardcontentinner">
            <div className="mail-img pt-5">
              <a href="#" class="fa fa-envelope"></a>
            </div>
              <h3 className="mt-2" style={{ textAlign: "center",color:"#3b5a9b"}}>Gmail Accounts</h3>
              <p class="card-text mt-3">Delivery Time 12 Hours</p>
                <div className="s-b mt-5 mb-4">
                <button className="btn-1 btn-button">Read more</button>
                </div>
            </div>
          </div>

          <div className="cardcontent">
            <div className="cardcontentinner">
            <div className="mail-img pt-5">
              <a href="#" class="fa fa-envelope"></a>
            </div>
              <h3 className="mt-2" style={{ textAlign: "center",color:"#3b5a9b"}}>Gmail Accounts</h3>
              <p class="card-text mt-3">Delivery Time 12 Hours</p>
                <div className="s-b mt-5 mb-4">
                <button className="btn-1 btn-button">Read more</button>
                </div>
            </div>
          </div>

          <div className="cardcontent">
            <div className="cardcontentinner">
            <div className="mail-img pt-5">
              <a href="#" class="fa fa-envelope"></a>
            </div>
              <h3 className="mt-2" style={{ textAlign: "center",color:"#3b5a9b"}}>Gmail Accounts</h3>
              <p class="card-text mt-3">Delivery Time 12 Hours</p>
                <div className="s-b mt-5 mb-4">
                <button className="btn-1 btn-button">Read more</button>
                </div>
            </div>
          </div>  

        </Slider>
      </div>
    );
  }
}
