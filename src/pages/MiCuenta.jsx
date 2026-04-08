import { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";

export default function MiCuenta() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email.includes("@")) {
      setError("Correo inválido");
      return;
    }
    if (pass.length < 4) {
      setError("Contraseña muy corta");
      return;
    }
    setError("Login exitoso ✅");
  };

  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper sx={{ p: 4, width: 300 }}>
        <Typography variant="h5">Iniciar Sesión</Typography>

        <TextField
          fullWidth
          label="Correo"
          margin="normal"
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          fullWidth
          label="Contraseña"
          type="password"
          margin="normal"
          onChange={(e) => setPass(e.target.value)}
        />

        <Button
          fullWidth
          variant="contained"
          color="warning"
          onClick={handleLogin}
        >
          Entrar
        </Button>

        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      </Paper>
    </Box>
  );
}