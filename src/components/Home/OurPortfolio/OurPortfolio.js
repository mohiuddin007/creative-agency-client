import React from 'react';
import './OurPortfolio.css';
import Carousel from 'react-elastic-carousel';
import carouselImg1 from '../../../images/carousel-1.png';
import carouselImg2 from '../../../images/carousel-2.png';
import carouselImg3 from '../../../images/carousel-3.png';
import carouselImg4 from '../../../images/carousel-4.png';
import carouselImg5 from '../../../images/carousel-5.png';



const OurPortfolio = () => {
    const items = [
        {id: 1, image: carouselImg1},
        {id: 2, image: carouselImg2},
        {id: 3, image: carouselImg3},
        {id: 4, image: carouselImg4},
        {id: 5, image: carouselImg5}
      ]

    const breakPoints = [
        {width : 480 , itemsToShow : 1},
        {width : 768 , itemsToShow : 2},
        {width : 991 , itemsToShow : 2},
        {width : 1200 , itemsToShow : 2},
    ]

    return (
        <div className="carouselStyle">
        <h1 className='text-center mb-4 text-white'>Here are some of <span className='text-info'> our works </span> </h1>
        <Carousel breakPoints= {breakPoints} >
            {
               items.map(item => 
                               <div>
                                    <img className="imgStyle" src={item.image} alt="carouselImage"/>
                                </div>)
            }
        </Carousel>
    </div>
    );
};

export default OurPortfolio;