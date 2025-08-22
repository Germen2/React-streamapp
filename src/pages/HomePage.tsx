import { Header, MovieBanner } from "../components";
import { MovieInterface, OperationEnum } from "../interfaces";
import { useMovies, useMovie, useUserAndMovies } from "../hooks";
import { useSearchParams } from "react-router-dom";

//cargar aqui las peliculas
function HomePage() {
  const movies = useMovies();
  const [searchParams] = useSearchParams();
  const idParam = searchParams.get("id");
  const movieId = idParam ? parseInt(idParam, 10) : null;
  const activeMovie = useMovie(movieId, movies);
  //const authStatus = useAuthStatus();
  const { user, operations } = useUserAndMovies();
  const isLoggedIn = !!user;

  //Comparar las peliculas que tiene un usuario con la pelicula actual
  const isActiveMoviePurchased: boolean = operations.some((op) => {
    if (
      op.movieId === activeMovie?.id &&
      op.operationType === OperationEnum.COMPRA
    ) {
      return true;
    }
  });

  //Comparar las peliculas que tiene un usuario con la pelicula actual
  const isActiveMovieRented: boolean = operations.some((op) => {
    if (
      op.movieId === activeMovie?.id &&
      op.operationType === OperationEnum.RENTA
    ) {
      return true;
    }
  });

  //Si no hay pelicula activa, crear un mock con datos vacios
  const emptyMovie: MovieInterface = {
    id: 0,
    title: "",
    description: "",
    categories: [],
    img: "",
    banner: "",
    releaseDate: "",
    year: "",
    length: "",
    trailer: "",
    active: false,
    buy: 0,
    rent: 0,
    trending: 0,
  };

  if (!activeMovie)
    return (
      <>
        <Header isLoggedIn={isLoggedIn} user={user} />
        <MovieBanner
          movie={emptyMovie}
          movieList={movies}
          isPurchased={false}
          isRented={false}
        />
      </>
    );
  return (
    <>
      <Header isLoggedIn={isLoggedIn} user={user} />
      <MovieBanner
        movie={activeMovie}
        movieList={movies}
        isPurchased={isActiveMoviePurchased}
        isRented={isActiveMovieRented}
      />
    </>
  );
}

export default HomePage;
