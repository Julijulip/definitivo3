import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export default function CardProducto({ producto }) {
  const { agregarCarrito, agregarFavorito } = useContext(CarritoContext);

  return (
    <Card sx={{ width: 250 }}>
      <CardMedia
        component="img"
        height="140"
        image={producto.img}
        alt={producto.nombre}
      />

      <CardContent>
        <Typography variant="h6">{producto.nombre}</Typography>
        <Typography>${producto.precio}</Typography>

        <Button
          variant="contained"
          color="warning"
          onClick={() => agregarCarrito(producto)}
          sx={{ mt: 1 }}
        >
          Agregar
        </Button>

        <Button
          variant="outlined"
          color="error"
          onClick={() => agregarFavorito(producto)}
          sx={{ mt: 1 }}
        >
          ❤️
        </Button>
      </CardContent>
    </Card>
  );
}