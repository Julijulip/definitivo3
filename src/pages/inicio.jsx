import { Box, Typography, Button } from "@mui/material";

export default function Inicio() {
  return (
    <Box
      sx={{
        height: "90vh",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1550547660-d9450f859349)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <Box sx={{ background: "rgba(0,0,0,0.5)", p: 4, borderRadius: 3 }}>
        <Typography variant="h3">🍔 FastFood Shop</Typography>

        <Typography variant="h6" sx={{ mt: 1 }}>
          La mejor comida rápida a un clic
        </Typography>

        <Button
          variant="contained"
          color="warning"
          sx={{ mt: 3, px: 4 }}
          href="https://github.com/TU-USUARIO/TU-REPO"
          target="_blank"
        >
          🚀 Ver código en GitHub
        </Button>
      </Box>
    </Box>
  );
}