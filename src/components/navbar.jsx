import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

import { AppBar, Toolbar, Typography, Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Navbar() {
  const { carrito, favoritos } = useContext(CarritoContext);

  return (
    <AppBar position="static" color="warning">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">🍔 FastFood</Typography>

        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <Link to="/">Inicio</Link>
          <Link to="/articulos">Artículos</Link>
          <Link to="/ofertas">Ofertas</Link>
          <Link to="/mi-cuenta">Mi Cuenta</Link>

          <Link to="/carrito">
            <IconButton>
              <Badge badgeContent={carrito.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>

          <Link to="/favoritos">
            <IconButton>
              <Badge badgeContent={favoritos.length} color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}