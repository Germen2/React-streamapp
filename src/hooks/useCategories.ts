/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import { CategoriesInterface } from "../interfaces";

export function useCategories() {
  const [categories, setCategories] = useState<CategoriesInterface[]>([]);

  const fetchData = () => {
    //fetch("/data/categories.json") //esta ruta es de donde obtendras la data (backend)
    const buscadorUrl: string = import.meta.env.VITE_STREAMAPP_MS_BUSCADOR;
    fetch(`${buscadorUrl}/categories`)
      .then((res) => res.json())
      .then((data: CategoriesInterface[]) => setCategories(data))
      .then()
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [categories, setCategories] as const;
}
