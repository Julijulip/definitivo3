import { useState } from "react";

export default function Ofertas() {
  const [contador, setContador] = useState(0);

  return (
    <div className="container">
      <h2>🔥 Ofertas del día</h2>
      <p>Veces que viste esta oferta: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>
        Ver más
      </button>
    </div>
  );
}