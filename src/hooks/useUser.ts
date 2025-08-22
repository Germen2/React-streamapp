import { useState, useEffect } from "react";
import { MovieInterface, OperationDto, UserDto } from "../interfaces";

//Agregar operaciones para regresarlas tambien
export function useUserAndMovies() {
  const [user, setUser] = useState<UserDto | null>(null);
  const [userMovies, setUserMovies] = useState<MovieInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [operations, setOperations] = useState<OperationDto[]>([]);

  useEffect(() => {
    const fetchUserAndMovies = async () => {
      const operadorUrl = import.meta.env.VITE_STREAMAPP_MS_OPERADOR;
      const buscadorUrl = import.meta.env.VITE_STREAMAPP_MS_BUSCADOR;
      const token = localStorage.getItem("token");

      if (!token) {
        console.warn("No se encontró token en localStorage");
        setLoading(false);
        return;
      }

      try {
        // 1️⃣ Obtener info del usuario
        const resUser = await fetch(`${operadorUrl}/users/user`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (!resUser.ok) throw new Error("Error al obtener usuario");
        const userData: UserDto = await resUser.json();
        setUser(userData);

        // 2️⃣ Obtener operaciones del usuario
        const resOps = await fetch(`${operadorUrl}/operations/useroperations`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (!resOps.ok) throw new Error("Error al obtener operaciones");
        const operations: OperationDto[] = await resOps.json();
        setOperations(operations);

        // 3️⃣ Extraer los movieId
        const movieIds = operations.map((op) => op.movieId);

        if (movieIds.length > 0) {
          // 4️⃣ Obtener las películas del buscador
          const resMovies = await fetch(`${buscadorUrl}/movies/by-ids`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(movieIds),
          });
          if (!resMovies.ok) throw new Error("Error al obtener películas");
          const moviesData: MovieInterface[] = await resMovies.json();
          setUserMovies(moviesData);
        }
      } catch (err: unknown) {
        console.error("Error en useUserAndMovies:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserAndMovies();
  }, []);

  return { user, userMovies, loading, operations };
}
