import React from 'react'
import Slider from "react-slick";

import slide1 from 'static/images/slides/1.png';
import slide2 from 'static/images/slides/2.png';
import slide3 from 'static/images/slides/3.png';
import slide4 from 'static/images/slides/4.png';
import slide5 from 'static/images/slides/5.png';
import slide6 from 'static/images/slides/6.png';
import slide7 from 'static/images/slides/7.png';
import slide8 from 'static/images/slides/8.png';
import slide9 from 'static/images/slides/9.png';
import slide10 from 'static/images/slides/10.png';



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
        title: 'Small things Make big Differences.',
        description: 'The big renowned Bharat Gas decides to share love in mini sizes with us at the minds behind all action.'
    },
    {
        id:4,
        img: slide4,
        client: 'Deal Jeans',
        alt: 'Deal Jeans Pinxitblue',
        overlay: 'deal-jeans-slide',
        title: "What's life without pop colours?",
        description: 'A nationally awarded clothing fashion brand Deal Jeans SS17 wear promoted successfully with a pop concept ad film.'
    },
    {
        id:5,
        img: slide5,
        client: 'Tuscan Verve',
        alt: 'Tuscan Verve Pinxitblue',
        overlay: 'tuscan-verve-slide',
        title: 'Brand it hard to hit a homerun.',
        description: 'Taking a new brand Tuscan Verve intp a market of choices & making it a bigger hit.'
    },
    {
        id: 6,
        img: slide6,
        client: 'Anmol',
        alt: 'Anmol Pinxitblue',
        overlay: 'anmol-slide',
        title: "Nature's beauty engraved never fails to amaze.",
        description: "Changing the norm of jewellery ads by taking inspiration from nature's beauty & engraving it as the Era of Design for Anmol Jewellers."
    },
    {
        id: 7,
        img: slide7,
        client: 'Gemfield',
        alt: 'Gemfield Pinxitblue',
        overlay: 'gemfield-slide',
        title: 'Find a gem that will not go unnoticed',
        description: 'Gemfields, a worldwide chosed brand for gemstones & jewellery enters India with our unique design support.',
    },
    {
        id: 8,
        img: slide8,
        client: "Talkvalkar's",
        alt: 'Talvalkar Pinxitblue',
        overlay: 'talvalkar-slide',
        title: "Look how we get fit to the 'T'",
        description: 'Talwalkars, a fitness gym was making an entry in town, Mumbai. We took it a step ahead & transformed it into the fitness destination.'
    },
    {
        id: 9,
        img: slide9,
        client: 'Times Of India',
        alt: 'Times Of India Pinxitblue',
        overlay: 'toi-slide',
        title: 'Dream big & win the pink',
        description: 'TOI launched an awards program for the stars of every field nationwide. We make it bug & pink.',
    },
    {
        id: 10,
        img: slide10,
        client: 'Golden Chariot',
        alt: 'Golden Chariot Pinxitblue',
        overlay: 'golden-chariot-slide',
        title: 'Food of the royals served in a chariot',
        description: 'Golden Chariot, a renowned fine dining restaurant in the suburbs turned supremely royal with our golden words.',
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
