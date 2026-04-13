import { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";

export default function MiCuenta() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (pass) => {
    // mínimo 6 caracteres + al menos 1 número (más realista)
    return pass.length >= 6 && /\d/.test(pass);
  };

  const handleLogin = () => {
    let newErrors = {};
    setSuccess("");

    if (!email) {
      newErrors.email = "El correo es obligatorio";
    } else if (!validateEmail(email)) {
      newErrors.email = "Correo inválido";
    }

    if (!pass) {
      newErrors.pass = "La contraseña es obligatoria";
    } else if (!validatePassword(pass)) {
      newErrors.pass =
        "La contraseña debe tener mínimo 6 caracteres y un número";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess("Login exitoso ✅");
    }
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
      <Paper sx={{ p: 4, width: 320, borderRadius: 3 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Iniciar Sesión
        </Typography>

        <TextField
          fullWidth
          label="Correo"
          margin="normal"
          value={email}
          error={!!errors.email}
          helperText={errors.email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrors((prev) => ({ ...prev, email: "" }));
          }}
        />

        <TextField
          fullWidth
          label="Contraseña"
          type="password"
          margin="normal"
          value={pass}
          error={!!errors.pass}
          helperText={errors.pass}
          onChange={(e) => {
            setPass(e.target.value);
            setErrors((prev) => ({ ...prev, pass: "" }));
          }}
        />

        <Button
          fullWidth
          variant="contained"
          color="warning"
          onClick={handleLogin}
          sx={{ mt: 2 }}
        >
          Entrar
        </Button>

        {success && (
          <Typography color="success.main" sx={{ mt: 2 }}>
            {success}
          </Typography>
        )}
      </Paper>
    </Box>
  );
}