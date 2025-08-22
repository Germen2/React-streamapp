import { useState, useEffect } from "react";
import { UserDto } from "../interfaces";

export function useAuthStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [authUser, setAuthUser] = useState<UserDto | null>(null);

  useEffect(() => {
    const operadorUrl = import.meta.env.VITE_STREAMAPP_MS_OPERADOR;

    const token = localStorage.getItem("token");
    if (!token) {
      setIsLoggedIn(false);
      return;
    }

    const controller = new AbortController();

    const validateToken = async () => {
      try {
        const res = await fetch(`${operadorUrl}/auth/token/validate`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          signal: controller.signal,
        });

        setIsLoggedIn(res.ok); // true si status 200, false si 401
        if (!res.ok) localStorage.removeItem("token"); // limpiar token expirado
        const resData: { valid: boolean; user: UserDto } = await res.json();
        setAuthUser(resData.user);
      } catch (err) {
        setIsLoggedIn(false);
      }
    };

    validateToken();

    return () => controller.abort();
  }, []);

  return { isLoggedIn, authUser };
}
