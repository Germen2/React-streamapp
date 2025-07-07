import "../css/movieSwiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Autoplay, EffectCoverflow } from "swiper/modules";
import { MovieInterface, MovieSwiperInterface } from "../interfaces";
import { useNavigate } from "react-router-dom";

function MovieSwiper(props: MovieSwiperInterface) {
  const navigate = useNavigate();

  const handleMovieChange = (id: number) => {
    const selectedMovie = props.slides.find((movie) => movie.id === id);
    if (selectedMovie) {
      navigate(`/home?id=${id}`);
    }
  };
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={10}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 10,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      loop={true}
      modules={[Autoplay, EffectCoverflow]}
      className="movieSwiper"
    >
      {props.slides.map((slide: MovieInterface) => (
        <SwiperSlide key={slide.id}>
          <img
            src={slide.img}
            alt=""
            onClick={() => handleMovieChange(slide.id)}
          ></img>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default MovieSwiper;
