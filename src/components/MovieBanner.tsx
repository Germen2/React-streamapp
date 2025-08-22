import "../css/movieBanner.css";
import { MovieContent, MovieSwiper, MovieTrailer } from ".";
import { MovieBannerInterface } from "../interfaces";

function MovieBanner(props: MovieBannerInterface) {
  return (
    <div className="banner">
      <div className="movie">
        <img
          src={props.movie.banner}
          alt=""
          className={`bgImg ${props.movie.active ? "active" : undefined}`}
        />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <MovieContent
                id={props.movie.id}
                title={props.movie.title}
                year={props.movie.year}
                releaseDate={props.movie.releaseDate}
                categories={props.movie.categories}
                length={props.movie.length}
                description={props.movie.description}
                buy={props.movie.buy}
                rent={props.movie.rent}
                active={props.movie.active}
                trending={props.movie.trending}
                isPurchased={props.isPurchased}
                isRented={props.isRented}
              />
            </div>
            <div className="col-lg-4 col-md-12">
              <MovieTrailer
                active={props.movie.active}
                trailerLink={props.movie.trailer}
              />
            </div>
          </div>
          <div className="row"></div>
        </div>
      </div>
      <MovieSwiper slides={props.movieList}></MovieSwiper>
    </div>
  );
}
export default MovieBanner;
