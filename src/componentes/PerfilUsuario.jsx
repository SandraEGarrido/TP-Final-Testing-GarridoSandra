import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function PerfilUsuario() {
  const navigate = useNavigate();

  const volver = () => {
    navigate("/libros");
  };

  const fechaActual = new Date();
  const opciones = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  const accesoFormateado = fechaActual.toLocaleString("es-AR", opciones);

  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "#e3f2fd",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: 350,
          padding: 3,
          boxShadow: 5,
          borderRadius: 4,
          textAlign: "center",
        }}
      >
        <Avatar
          alt="Sandra Garrido"
          src="/img/fotoPerfil.png"
          sx={{ width: 100, height: 100, margin: "auto", mb: 2 }}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Mi Perfil
          </Typography>
          <Typography variant="body1">
            <strong>Nombre:</strong> Sandra Garrido
          </Typography>
          <Typography variant="body1">
            <strong>Rol:</strong> Administradora
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Email:</strong> sandra@gmail.com
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            <strong>Último acceso:</strong> {accesoFormateado}
          </Typography>

          <Button
            variant="contained"
            onClick={volver}
            startIcon={<ArrowBackIcon />}
          >
            Volver a la app
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
