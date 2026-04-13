import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Button,
  Stack,
  TextField,
  Paper
} from "@mui/material";

export default function App() {

  // CLOCK
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // COLOR
  const [color, setColor] = useState("purple");
  const cambiarColor = () => {
    setColor(color === "purple" ? "blue" : "purple");
  };

  // COUNTER
  const [count, setCount] = useState(0);

  // FETCH
  const [user, setUser] = useState(null);
  const obtenerUsuario = async () => {
    const random = Math.floor(Math.random() * 10) + 1;
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${random}`
    );
    const data = await res.json();
    setUser(data);
  };

  // INPUT
  const [texto, setTexto] = useState("");

  // TOGGLE
  const [visible, setVisible] = useState(false);

  // ONLINE STATUS
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // LOCAL STORAGE
  const [name, setName] = useState(
    localStorage.getItem("username") || ""
  );

  useEffect(() => {
    localStorage.setItem("username", name);
  }, [name]);

  // WINDOW WIDTH
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // ESTILO REUTILIZABLE
  const cardStyle = {
    p: 3,
    borderRadius: "20px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    background: "linear-gradient(135deg, #ffffff, #f5f7fa)",
    transition: "0.3s",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 12px 25px rgba(0,0,0,0.2)"
    }
  };

  const buttonStyle = {
    background: "linear-gradient(45deg,#7b1fa2,#00e5ff)",
    color: "white",
    fontWeight: "bold",
    borderRadius: "10px",
    px: 3,
    "&:hover": {
      background: "linear-gradient(45deg,#6a1b9a,#00bcd4)"
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        p: 4,
        background: "linear-gradient(120deg,#e0c3fc,#8ec5fc)"
      }}
    >

      <Typography
        variant="h4"
        align="center"
        sx={{ mb: 4, fontWeight: "bold", color: "#333" }}
      >
        Dashboard de Hooks ⚛️
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr"
          },
          gap: 3
        }}
      >

        {/* CLOCK */}
        <Paper sx={cardStyle}>
          <Typography variant="h6">Reloj</Typography>
          <Typography variant="h5" mt={2}>
            {time.toLocaleTimeString()}
          </Typography>
        </Paper>

        {/* COLOR */}
        <Paper sx={cardStyle}>
          <Typography variant="h6">Color</Typography>
          <Box
            sx={{
              width: "100%",
              height: 100,
              backgroundColor: color,
              mt: 2,
              borderRadius: "10px"
            }}
          />
          <Button sx={{ ...buttonStyle, mt: 2 }} onClick={cambiarColor}>
            Cambiar
          </Button>
        </Paper>

        {/* COUNTER */}
        <Paper sx={cardStyle}>
          <Typography variant="h6">Contador</Typography>
          <Typography variant="h4">{count}</Typography>
          <Stack direction="row" spacing={2} mt={2}>
            <Button sx={buttonStyle} onClick={() => setCount(count + 1)}>+</Button>
            <Button sx={buttonStyle} onClick={() => setCount(count - 1)}>-</Button>
          </Stack>
        </Paper>

        {/* FETCH */}
        <Paper sx={cardStyle}>
          <Typography variant="h6">API</Typography>
          <Button sx={buttonStyle} onClick={obtenerUsuario}>
            Cargar usuario
          </Button>
          {user && (
            <Box mt={2}>
              <Typography>{user.name}</Typography>
              <Typography>{user.email}</Typography>
              <Typography>{user.address.city}</Typography>
            </Box>
          )}
        </Paper>

        {/* INPUT */}
        <Paper sx={cardStyle}>
          <Typography variant="h6">Input</Typography>
          <TextField
            fullWidth
            label="Escribe algo"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            sx={{ mt: 2 }}
          />
          <Typography mt={2}>{texto}</Typography>
        </Paper>

        {/* TOGGLE */}
        <Paper sx={cardStyle}>
          <Typography variant="h6">Toggle</Typography>
          <Button sx={buttonStyle} onClick={() => setVisible(!visible)}>
            Mostrar
          </Button>
          {visible && (
            <Typography mt={2}>
              Aparezco 😎
            </Typography>
          )}
        </Paper>

        {/* ONLINE */}
        <Paper sx={cardStyle}>
          <Typography variant="h6">Conexión</Typography>
          <Typography mt={2}>
            {isOnline ? "🟢 En línea" : "🔴 Offline"}
          </Typography>
        </Paper>

        {/* STORAGE */}
        <Paper sx={cardStyle}>
          <Typography variant="h6">Usuario</Typography>
          <TextField
            label="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ mt: 2 }}
          />
          <Typography mt={2}>{name}</Typography>
        </Paper>

        {/* WIDTH */}
        <Paper sx={cardStyle}>
          <Typography variant="h6">Pantalla</Typography>
          <Typography mt={2}>{width}px</Typography>
        </Paper>

      </Box>
    </Box>
  );
}