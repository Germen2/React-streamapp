/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import { MovieInterface } from "../interfaces";

export function useMovie(id: number | null, movies: MovieInterface[]) {
  const [activeMovie, setActiveMovie] = useState<MovieInterface | null>(null);

  useEffect(() => {
    if (!movies || movies.length === 0) return;
    if (id === null) {
      const random = movies[Math.floor(Math.random() * movies.length)];
      setActiveMovie(random);
    } else {
      const selectedMovie = movies.find((movie) => movie.id === id);
      setActiveMovie(selectedMovie || null);
    }
  }, [id, movies]);

  return activeMovie;
}
