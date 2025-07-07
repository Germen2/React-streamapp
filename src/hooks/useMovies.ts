/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import { MovieInterface } from "../interfaces";

export function useMovies() {
  const [movies, setMovies] = useState<MovieInterface[]>([]);

  const fetchData = () => {
    fetch("/data/movies.json") //esta ruta es de donde obtendras la data (backend)
      .then((res) => res.json())
      .then((data: MovieInterface[]) => setMovies(data))
      .then()
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return movies;
}
