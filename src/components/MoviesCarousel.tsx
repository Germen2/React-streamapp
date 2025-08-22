import React from "react";
import { Carousel } from "react-bootstrap";
import "../css/loginCarousel.css";
import { useMovies } from "../hooks/useMovies";

const MoviesCarousel: React.FC = () => {
  const movies = useMovies(); // obtenemos todas las películas

  return (
    <Carousel className="carousel" indicators={false} wrap={true}>
      {movies.map((movie) => (
        <Carousel.Item key={movie.id}>
          <img
            className="d-block w-100"
            src={movie.banner} // usamos el campo banner de cada película
            alt={movie.title} // puedes usar el título como alt
          />
          <Carousel.Caption>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MoviesCarousel;
