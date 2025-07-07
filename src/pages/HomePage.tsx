import { Header, MovieBanner } from "../components";
import { MovieInterface } from "../interfaces";
import { useMovies, useMovie } from "../hooks";
import { useSearchParams } from "react-router-dom";

//cargar aqui las peliculas
function HomePage() {
  const movies = useMovies();
  const [searchParams] = useSearchParams();
  const idParam = searchParams.get("id");
  const movieId = idParam ? parseInt(idParam, 10) : null;
  const activeMovie = useMovie(movieId, movies);

  //Si no hay pelicula activa, crear un mock con datos vacios
  const emptyMovie: MovieInterface = {
    id: 0,
    title: "",
    description: "",
    genre: [],
    img: "",
    banner: "",
    date: "",
    year: "",
    length: "",
    trailer: "",
    active: false,
    buy: "",
    rent: "",
    trending: {
      status: false,
      number: 0,
    },
  };

  if (!activeMovie)
    return (
      <>
        <Header />
        <MovieBanner movie={emptyMovie} movieList={movies} />
      </>
    );
  return (
    <>
      <Header />
      <MovieBanner movie={activeMovie} movieList={movies} />
    </>
  );
}

export default HomePage;
