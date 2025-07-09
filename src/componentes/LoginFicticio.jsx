import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";

export default function LoginFicticio() {
  const navigate = useNavigate();

  const volver = () => {
    navigate("/libros"); // Vuelve al inicio de la app
  };

  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "#e3f2fd",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: 3,
      }}
    >
      <CollectionsBookmarkIcon sx={{ fontSize: 60, color: "#0288d1" }} />
      <Typography variant="h3" color="primary">
        Sesión cerrada
      </Typography>
      <Typography variant="body1">
        Gracias por usar <strong>BiblioGestor</strong>
      </Typography>
      <Button variant="contained" onClick={volver}>
        Volver a iniciar
      </Button>
    </Box>
  );
}

