import React from 'react'
import Slider from "react-slick";

import slide1 from 'static/images/slides/1.png';
import slide2 from 'static/images/slides/2.png';
import slide3 from 'static/images/slides/3.jpg';
import slide4 from 'static/images/slides/4.jpg';
import slide5 from 'static/images/slides/5.jpg';
import slide6 from 'static/images/slides/6.jpg';
import slide7 from 'static/images/slides/7.jpg';
import slide8 from 'static/images/slides/8.jpg';
import slide9 from 'static/images/slides/9.jpg';


const slides =[
    {
        id:1,
        img: slide1,
        client: 'Google',
        alt: 'Google Pinxitblue',
        overlay: 'google-slide',
        title: 'First Impression Is the last.',
        description: 'Helping an 89.46 billion USD company set foot in India & creating an unbeatable impression.'
    },
    {
        id:2,
        img: slide2,
        client: 'Barclays',
        alt: 'Barclays Pinxitblue',
        overlay: 'barclays-slide',
        title: 'Great brands Treat their Own greater.',
        description: 'Barclays, a great brand that believes in making employees feel greater collaborates with us for a corporate film.'
    },
    {
        id:3,
        img: slide3,
        client: 'Bharat petroleum',
        alt: 'Bharat petroleum Pinxitblue',
        overlay: 'bharat-petroleum-slide',
        title: 'Small things Make big Differences .',
        description: 'The big renowned Bharat Gas decides to share love in mini sizes with us at the minds behind all action.'
    }
]

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    draggable: false,
    fade: true,
    pauseOnHover: false,
};

export default function Carousel() {
    return (
        <div className="carousel">
            <Slider {...settings}>
            {slides.map((slide)=>(
                <div key={slide.id} className="carousel__slider">
                    <img className="carousel__slider__slide" src={slide.img} alt={slide.alt} />
                    <div className={`carousel__overlay ${slide.overlay}`}>
                        <h1 className="carousel__overlay__title">{slide.title}</h1>
                        <p className="carousel__overlay__description">{slide.description}</p>
                        <h3 className="carousel__overlay__client">Work | {slide.client}</h3>
                    </div>
                </div>
            ))
            }
            </Slider>
        </div>
    )
}
