import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

import {
  AppBar,
  Toolbar,
  Typography,
  Badge,
  IconButton,
  Box,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Navbar() {
  const { carrito, favoritos } = useContext(CarritoContext);

  return (
    <AppBar position="static" color="warning">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap", // 🔥 permite adaptarse en celular
          gap: 1,
        }}
      >
        {/* LOGO */}
        <Typography
          variant="h6"
          sx={{ fontSize: { xs: "16px", sm: "20px" } }}
        >
          🍔 FastFood
        </Typography>

        {/* LINKS */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexWrap: "wrap", // 🔥 se acomodan en varias líneas si es necesario
            justifyContent: "center",
          }}
        >
          <Link to="/">Inicio</Link>
          <Link to="/articulos">Artículos</Link>
          <Link to="/ofertas">Ofertas</Link>
          <Link to="/mi-cuenta">Mi Cuenta</Link>
        </Box>

        {/* ICONOS */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Link to="/favoritos">
            <IconButton>
              <Badge badgeContent={favoritos.length} color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>
          </Link>

          <Link to="/carrito">
            <IconButton>
              <Badge badgeContent={carrito.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}