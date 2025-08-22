import { OperationEnum } from "../interfaces";

// utils/operations.ts
export async function sendOperation(
  movieId: number,
  operationType: OperationEnum
) {
  const operadorUrl = import.meta.env.VITE_STREAMAPP_MS_OPERADOR;
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Debes iniciar sesión para realizar esta operación");
    return;
  }

  try {
    const res = await fetch(`${operadorUrl}/operations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        movieId,
        operationType,
      }),
    });

    if (!res.ok) {
      throw new Error("Error en la operación");
    }

    const data = await res.json();
    console.log("Operación exitosa:", data);
    alert(
      operationType === "COMPRA"
        ? "¡Película comprada con éxito!"
        : "¡Película rentada con éxito!"
    );
  } catch (err) {
    console.error(err);
    alert("Hubo un problema al procesar la operación");
  }
}
