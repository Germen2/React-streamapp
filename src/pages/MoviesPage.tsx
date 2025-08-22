import { Header, MovieCard, MovieFilter } from "../components";
import { useAuthStatus, useCategories, useMovies } from "../hooks";
import "../css/moviesPage.css";
import { useEffect, useState } from "react";
import { MovieInterface } from "../interfaces";

function MoviesPage() {
  const movies = useMovies();
  const [filters, setFilters] = useCategories();

  const [filteredMovies, setFilteredMovies] = useState<MovieInterface[]>([]);
  const authStatus = useAuthStatus();

  useEffect(() => {
    if (movies.length > 0) {
      setFilteredMovies(movies); // Copia inicial
    }
  }, [movies]);

  const handleFilterMovies = (category: string) => {
    setFilters(
      filters.map((filter) => {
        filter.active = false;
        if (filter.name === category) {
          filter.active = true;
        }
        return filter;
      })
    );

    if (category === "Todos") {
      setFilteredMovies(movies);
    } else {
      setFilteredMovies(
        movies.filter((movie) =>
          movie.categories.some((c) => c.name === category)
        )
      );
    }
  };

  return (
    <div>
      <Header isLoggedIn={authStatus.isLoggedIn} user={authStatus.authUser} />

      <div id="movieList" className="movieList">
        <div className="container-fluid">
          <div className="row">
            <h4 className="movieList title">Todas las películas</h4>
          </div>

          <div className="row">
            <ul className="filters">
              {filters.map((filter) => (
                <MovieFilter
                  key={filter.id}
                  id={filter.id}
                  name={filter.name}
                  active={filter.active}
                  handleFilterMovie={() => handleFilterMovies(filter.name)}
                />
              ))}
            </ul>
          </div>

          <div className="row mt-5 movie-grid">
            {filteredMovies && filteredMovies.length > 0 ? (
              filteredMovies.map((movie) => (
                <div className="col-2">
                  <MovieCard
                    key={movie.id}
                    id={movie.id}
                    img={movie.img}
                    categories={movie.categories.map((c) => c.name)}
                    length={movie.length}
                    title={movie.title}
                    trending={movie.trending}
                  />
                </div>
              ))
            ) : (
              <p className="no-movies">No hay películas para mostrar.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesPage;
