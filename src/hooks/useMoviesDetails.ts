/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import { MovieDetailsInterface } from "../interfaces";

export function useMoviesDetails() {
  const [moviesDetails, setMoviesDetails] = useState<MovieDetailsInterface[]>();

  const fetchData = () => {
    fetch("/data/movieDetails.json") //esta ruta es de donde obtendras la data (backend)
      .then((res) => res.json())
      .then((data: MovieDetailsInterface[]) => setMoviesDetails(data))
      .then()
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return moviesDetails;
}
