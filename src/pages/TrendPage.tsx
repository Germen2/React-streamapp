import { Header, MovieCard } from "../components";
import { useMovies } from "../hooks";

function TrendPage() {
  const movies = useMovies();

  const trendingMovies = movies
    .filter((movie) => movie.trending?.status) // Solo los que están en tendencia
    .slice() // Copia para no mutar el original
    .sort((a, b) => a.trending.number - b.trending.number); // Ordena ascendente

  return (
    <div>
      <Header />
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
                <MovieCard
                  id={movie.id}
                  img={movie.img}
                  categories={movie.genre}
                  length={movie.length}
                  title={movie.title}
                  trending={movie.trending.number}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default TrendPage;
