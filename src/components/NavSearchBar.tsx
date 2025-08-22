import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchOutline } from "react-ionicons";
import "../css/navSearchBar.css";
import { useMovies } from "../hooks/useMovies";
import { MovieInterface } from "../interfaces";

function NavSearchBar() {
  const [query, setQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState<MovieInterface[]>([]);
  const movies = useMovies();
  const navigate = useNavigate();

  // Maneja el cambio del input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value === "") {
      setFilteredMovies([]);
    } else {
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  };

  // Al seleccionar una película
  const handleSelectMovie = (id: number) => {
    navigate(`/home?id=${id}`);
    setQuery(""); // limpia el input
    setFilteredMovies([]); // limpia la lista de sugerencias
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleChange}
      />
      <SearchOutline cssClasses={"search-icon"} />

      {filteredMovies.length > 0 && (
        <ul className="search-results">
          {filteredMovies.map((movie) => (
            <li key={movie.id} onClick={() => handleSelectMovie(movie.id)}>
              {movie.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NavSearchBar;
