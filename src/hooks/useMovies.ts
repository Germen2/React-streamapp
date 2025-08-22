/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import { MovieInterface } from "../interfaces";

export function useMovies() {
  const [movies, setMovies] = useState<MovieInterface[]>([]);

  const fetchData = () => {
    const buscadorUrl = import.meta.env.VITE_STREAMAPP_MS_BUSCADOR;
    //fetch("/data/movies.json") //esta ruta es de donde obtendras la data (backend)
    fetch(`${buscadorUrl}/movies`)
      .then((res) => res.json())
      .then((data: MovieInterface[]) => {
        setMovies(data);
      })
      .then()
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return movies;
}
