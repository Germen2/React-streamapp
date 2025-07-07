import { Header, MovieCard, MovieFilter } from "../components";
import { useCategories, useMovies } from "../hooks";
import "../css/moviesPage.css";
import { useEffect, useState } from "react";
import { MovieInterface } from "../interfaces";

function MoviesPage() {
  const movies = useMovies();
  const [filters, setFilters] = useCategories();

  const [filteredMovies, setFilteredMovies] = useState<MovieInterface[]>([]);

  useEffect(() => {
    if (movies.length > 0) {
      setFilteredMovies(movies); // se copia al cargar
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
        movies.filter((movie) => movie.genre.includes(category))
      );
    }
  };

  return (
    <div>
      <Header />

      <div id="movieList" className="movieList">
        <div className="container-fluid">
          <div className="row">
            <h4 className="movieList title">Todas las películas</h4>
          </div>
          <div className="row">
            <ul className="filters">
              {filters.map((filter) => (
                <MovieFilter
                  id={filter.id}
                  name={filter.name}
                  active={filter.active}
                  handleFilterMovie={() => handleFilterMovies(filter.name)}
                />
              ))}
            </ul>
          </div>
          <div className="row mt-5">
            {movies &&
              movies.length > 0 &&
              filteredMovies.map((movie) => (
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

export default MoviesPage;
