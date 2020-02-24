import React from 'react'
import Slider from "react-slick";

import slide1 from 'static/images/slides/1.jpg'
import slide2 from 'static/images/slides/2.jpg'
import slide3 from 'static/images/slides/3.jpg'

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    draggable: false,
    fade: true,
    pauseOnHover: false,
};

export default function Carousel() {
    return (
        <div className="carousel">
            <Slider {...settings}>
                <div className="carousel__slider">
                    <img className="carousel__slider__slide" src={slide1} alt="Google Pinxitblue" />
                </div>
                <div className="carousel__slider">
                    <img className="carousel__slider__slide" src={slide2} alt="Barclays Pinxitblue" />
                </div>
                <div className="carousel__slider">
                    <img className="carousel__slider__slide" src={slide3} alt="Bharat Petroleum Pinxitblue" />
                </div>
            </Slider>
        </div>
    )
}
