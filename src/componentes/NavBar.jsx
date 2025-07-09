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
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";

import { IconButton, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const location = useLocation(); // para saber qué ruta está activa

  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const cerrarSesion = () => {
    handleMenuClose();
    navigate("/login"); // Te lleva a la pantalla ficticia
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo + título + links juntos a la izquierda */}
          <Stack direction="row" alignItems="center" spacing={3}>
            <CollectionsBookmarkIcon sx={{ color: "#80DEEA" }} />
            <Typography
              variant="subtitle1"
              component="div"
              sx={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: ".05rem",
                fontSize: "1rem",
                color: "white",
              }}
            >
              BiblioGestor
            </Typography>

            {/* Botones de navegación */}
            <Button
              component={Link}
              to="/libros"
              sx={{
                color: "white",
                backgroundColor:
                  location.pathname === "/libros"
                    ? "rgba(255,255,255,0.2)"
                    : "transparent",
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
                backgroundColor:
                  location.pathname === "/bibliotecas"
                    ? "rgba(255,255,255,0.2)"
                    : "transparent",
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

          <>
            <IconButton onClick={handleMenuOpen} sx={{ p: 0 }}>
              <Avatar
                alt="Usuario"
                src="/img/fotoPerfil.png"
                sx={{ width: 40, height: 40 }}
              />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              onClick={handleMenuClose}
              PaperProps={{
                elevation: 3,
                sx: {
                  mt: 1.5,
                  minWidth: 160,
                  bgcolor: "background.paper",
                },
              }}
            >
              <MenuItem
                onClick={() => {
                  handleMenuClose();
                  navigate("/perfil");
                }}
              >
                Perfil
              </MenuItem>

              <MenuItem onClick={cerrarSesion}>Cerrar sesión</MenuItem>
            </Menu>
          </>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
