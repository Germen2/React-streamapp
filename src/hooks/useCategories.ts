/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import { CategoriesInterface } from "../interfaces";

export function useCategories() {
  const [categories, setCategories] = useState<CategoriesInterface[]>([]);

  const fetchData = () => {
    fetch("/data/categories.json") //esta ruta es de donde obtendras la data (backend)
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
