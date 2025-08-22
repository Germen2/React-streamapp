import { Header, MovieCard } from "../components";
import { useAuthStatus, useMovies } from "../hooks";

function TrendPage() {
  const movies = useMovies();
  const authStatus = useAuthStatus();

  const trendingMovies = movies
    .filter((movie) => movie.trending) // Solo los que están en tendencia
    .slice() // Copia para no mutar el original
    .sort((a, b) => a.trending - b.trending); // Ordena ascendente

  return (
    <div>
      <Header isLoggedIn={authStatus.isLoggedIn} user={authStatus.authUser} />
      <div id="movieList" className="movieList">
        <div className="container-fluid">
          <div className="row">
            <h4 className="movieList title">Las películas más populares</h4>
          </div>
          <div className="row"></div>
          <div className="row mt-5">
            {movies &&
              movies.length > 0 &&
              trendingMovies.map((movie) => (
                <div className="col-2">
                  <MovieCard
                    id={movie.id}
                    img={movie.img}
                    categories={movie.categories.map((c) => c.name)}
                    length={movie.length}
                    title={movie.title}
                    trending={movie.trending}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default TrendPage;
