import { createContext, useState } from "react";

export const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  const agregarCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const agregarFavorito = (producto) => {
    setFavoritos([...favoritos, producto]);
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, favoritos, agregarCarrito, agregarFavorito }}
    >
      {children}
    </CarritoContext.Provider>
  );
}