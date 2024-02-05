import React from "react";
import { Carousel } from "react-bootstrap";
import "./CSS/Carousel.css";
import image1 from "../../assets/images/carousel/img8.jpg";
import image2 from "../../assets/images/carousel/img9.jpg";
import image3 from "../../assets/images/carousel/img10.jpg";
import image4 from "../../assets/images/carousel/img11.jpg";
import image5 from "../../assets/images/carousel/img12.jpg";

function CarouselComponent() {
  return (
    <div className="carousel">
      <Carousel>
        <Carousel.Item>
          <img className="image" src={image1} alt="Slider 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={image2} alt="Slider 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={image3} alt="Slider 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={image4} alt="Slider 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={image5} alt="Slider 1" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
