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
          flexWrap: "nowrap", // 🔥 evita que se rompa
        }}
      >
        {/* LOGO */}
        <Typography variant="h6" sx={{ fontSize: { xs: "16px", sm: "20px" } }}>
          🍔 FastFood
        </Typography>

        {/* CONTENEDOR DERECHO */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 1, sm: 2 },
          }}
        >
          {/* LINKS (se ocultan en pantallas muy pequeñas) */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" }, // 🔥 se esconden en celular
              gap: 2,
            }}
          >
            <Link to="/">Inicio</Link>
            <Link to="/articulos">Artículos</Link>
            <Link to="/ofertas">Ofertas</Link>
            <Link to="/mi-cuenta">Mi Cuenta</Link>
          </Box>

          {/* FAVORITOS (SIEMPRE visible) */}
          <Link to="/favoritos">
            <IconButton>
              <Badge badgeContent={favoritos.length} color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>
          </Link>

          {/* CARRITO (SIEMPRE visible) */}
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