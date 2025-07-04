import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Stack,
  Tooltip,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import MenuBookIcon from "@mui/icons-material/MenuBook";

export default function NavBar() {
  const location = useLocation(); // para saber qué ruta está activa

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo + título + links juntos a la izquierda */}
          <Stack direction="row" alignItems="center" spacing={3}>
            <MenuBookIcon />
            <Typography variant="h6" component="div">
              Gestión de Libros
            </Typography>

            {/* Botones de navegación */}
            <Button
              component={Link}
              to="/libros"
              sx={{
                color: "white",
                backgroundColor: location.pathname === "/libros" ? "rgba(255,255,255,0.2)" : "transparent",
                borderRadius: 2,
                textTransform: "uppercase",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.2)",
                },
              }}
            >
              Libros
            </Button>
            <Button
              component={Link}
              to="/bibliotecas"
              sx={{
                color: "white",
                backgroundColor: location.pathname === "/bibliotecas" ? "rgba(255,255,255,0.2)" : "transparent",
                borderRadius: 2,
                textTransform: "uppercase",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.2)",
                },
              }}
            >
              Bibliotecas
            </Button>
          </Stack>

          {/* Avatar usuario */}
          <Tooltip title="Mi perfil">
            <Avatar
              alt="Usuario"
              src="/img/fotoPerfil.png"
              sx={{ width: 40, height: 40 }}
            />
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
}