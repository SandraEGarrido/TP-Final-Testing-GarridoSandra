import React, { useState, useContext, useEffect } from "react";

// Importo componentes de Material UI para botones, íconos y campos de formulario
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { FormControl, TextField } from "@mui/material";
import { Box } from "@mui/material";

// Importo el contexto donde está el dispatch para manejar las bibliotecas
import { ContextBibliotecas } from "./contextos";

export default function FormBiblioteca() {
  const sxFormBiblioteca = {
    marginBottom: 2,
  };

  const {
    handlerActualizarBiblioteca,
    bibliotecaActualizar,
    dispatchBibliotecas,
  } = useContext(ContextBibliotecas);

  // Definición de Estados para cada campo del formulario
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [actualizar, setActualizar] = useState(false);

  useEffect(() => {
    if (bibliotecaActualizar) {
      cargarForm();
      setActualizar(true);
    }
  }, [bibliotecaActualizar]);

  function cargarForm() {
    setNombre(bibliotecaActualizar.nombre);
    setDireccion(bibliotecaActualizar.direccion);
  }

  // Manejadores de cambio para cada campo
  const handlerNombre = (event) => {
    setNombre(event.target.value);
  };

  function handlerDireccion(event) {
    setDireccion(event.target.value);
  }

  function limpiarForm() {
    setNombre("");
    setDireccion("");

    if (actualizar) {
      setActualizar(false);

      // al llamar la funcion de esta manera dejamos indefinada la variable bibliotecaActualizar
      handlerActualizarBiblioteca();
    }
  }

  // Manejador del evento submit del formulario
  const handlerSubmit = (event) => {
    event.preventDefault(); // Evita que se recargue la página

    // Creo el objeto biblioteca con sus propiedades
    const biblioteca = {
      id: crypto.randomUUID(), // genera un ID único
      nombre: nombre,
      direccion: direccion,
    };

    alert(JSON.stringify(biblioteca)); // Se Muestra la biblioteca como prueba

    // Uso dispatch para enviar la acción "agregar" con la biblioteca
    dispatchBibliotecas({
      type: actualizar ? "actualizar" : "agregar",
      biblioteca: actualizar
        ? { ...biblioteca, id: bibliotecaActualizar.id }
        : biblioteca,
    });

    limpiarForm(); // Se limpia el formulario después que guarda
  };

  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: 400,
        margin: "auto",
        padding: 2,
      }}
    >
      <form id="formBiblioteca" onSubmit={handlerSubmit}>
        <FormControl fullWidth>
          <TextField
            id="nombre"
            label="Nombre"
            variant="outlined"
            size="small"
            fullWidth
            value={nombre}
            onChange={handlerNombre}
            sx={sxFormBiblioteca}
            required
          />
        </FormControl>
        {/* Campo para la descripción (textarea) */}
        <FormControl fullWidth>
          <TextField
            id="direccion"
            label="Dirección"
            variant="outlined"
            size="small"
            fullWidth
            multiline
            rows={3}
            value={direccion}
            onChange={handlerDireccion}
            sx={sxFormBiblioteca}
            required
          />
        </FormControl>
        <Button
          variant="contained"
          color="success"
          startIcon={<SaveIcon />}
          type="submit"
        >
          {actualizar ? "Actualizar" : "Guardar"}
        </Button>
        &nbsp;
        {actualizar && (
          <Button
            variant="contained"
            color="warning"
            startIcon={<CancelIcon />}
            onClick={limpiarForm}
          >
            Cancelar
          </Button>
        )}
      </form>
    </Box>
  );
}
