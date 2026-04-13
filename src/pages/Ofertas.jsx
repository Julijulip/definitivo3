import { useEffect, useState } from "react";

export default function Reloj() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const styles = {
    container: {
      height: "80vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #1f1f2e, #2c2c44)",
      fontFamily: "system-ui, sans-serif",
    },
    card: {
      background: "rgba(255, 255, 255, 0.08)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(255, 255, 255, 0.15)",
      padding: "40px",
      borderRadius: "20px",
      textAlign: "center",
      boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
      width: "340px",
      color: "white",
    },
    title: {
      fontSize: "22px",
      marginBottom: "20px",
    },
    time: {
      fontSize: "40px",
      fontWeight: "bold",
      letterSpacing: "2px",
      marginBottom: "15px",
      color: "#00ffcc",
    },
    date: {
      fontSize: "16px",
      opacity: 0.9,
      marginBottom: "8px",
    },
    year: {
      fontSize: "14px",
      opacity: 0.7,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>🕒 Reloj en tiempo real</h2>

        <div style={styles.time}>
          {time.toLocaleTimeString()}
        </div>

        <p style={styles.date}>
          📅 {time.toLocaleDateString("es-CO", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <p style={styles.year}>
          📌 Año actual: {time.getFullYear()}
        </p>
      </div>
    </div>
  );
}