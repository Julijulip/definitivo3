import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function Favoritos() {
  const { favoritos } = useContext(CarritoContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Favoritos</h2>

      {favoritos.map((p, i) => (
        <Card key={i} sx={{ display: "flex", mb: 2 }}>
          <CardMedia component="img" image={p.img} sx={{ width: 100 }} />
          <CardContent>
            <Typography>{p.nombre}</Typography>
            <Typography>${p.precio}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}