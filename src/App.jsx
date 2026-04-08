import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Inicio from "./pages/inicio";
import Articulos from "./pages/Articulos";
import Ofertas from "./pages/Ofertas";
import MiCuenta from "./pages/MiCuenta";
import Carrito from "./pages/Carrito";
import Favoritos from "./pages/Favoritos";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/articulos" element={<Articulos />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/mi-cuenta" element={<MiCuenta />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </>
  );
}

export default App;