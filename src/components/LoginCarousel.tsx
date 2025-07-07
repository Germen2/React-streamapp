import React from "react";
import { Carousel } from "react-bootstrap";
import "../css/loginCarousel.css";

const LoginCarousel: React.FC = () => {
  return (
    <Carousel className="carousel" indicators={false} wrap={true}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="banners/supermanbanner.jpg"
          alt="Primera imagen"
        />
        <Carousel.Caption>
          <h3>Primera imagen</h3>
          <p>Descripción de la primera imagen.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="banners/f4banner.jpg"
          alt="Segunda imagen"
        />
        <Carousel.Caption>
          <h3>Segunda imagen</h3>
          <p>Descripción de la segunda imagen.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="banners/ballerina.jpg"
          alt="Tercera imagen"
        />
        <Carousel.Caption>
          <h3>Tercera imagen</h3>
          <p>Descripción de la tercera imagen.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default LoginCarousel;
