import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import carousel_01 from "../assets/images/carousel_01.jpg";
import carousel_02 from "../assets/images/carousel_02.jpg";
import carousel_03 from "../assets/images/carousel_03.jpg";

const CarouselComponent = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
          <img src={carousel_01} alt="AC Spare Parts" className="h-96 w-full object-fill"/>
        </div>
        <div>
          <img src={carousel_02} alt="Affordable Pricing" className="h-96 w-full object-fill"/>
        </div>
        <div>
          <img src={carousel_03} alt="Reliable Service" className="h-96 w-full object-fill"/>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
