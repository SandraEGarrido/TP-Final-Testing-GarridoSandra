import React, { useState, useContext, useEffect } from "react";

// Importo componentes de Material UI para botones, íconos y campos de formulario
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { FormControl, InputLabel, MenuItem, TextField } from "@mui/material";
import Select from "@mui/material/Select";
// Importo el contexto donde está el dispatch para manejar los libros
import { ContextLibros } from "./contextos";

export default function FormLibro() {
  const sxFormLibro = {
    marginBottom: 2,
  };

  const { handlerActualizarLibro, libroActualizar, dispatchLibros } =
    useContext(ContextLibros);

  // Definición de Estados para cada campo del formulario
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fechaIngreso, setFechaIngreso] = useState("");
  const [genero, setGenero] = useState("Terror"); //valor inicial
  const [actualizar, setActualizar] = useState(false);

  useEffect(() => {
    if (libroActualizar) {
      cargarForm();
      setActualizar(true);
    }
  }, [libroActualizar]);

  function cargarForm() {
    setNombre(libroActualizar.nombre);
    setDescripcion(libroActualizar.descripcion);
    setFechaIngreso(libroActualizar.fechaIngreso);
    setGenero(libroActualizar.genero);
  }

  // Manejadores de cambio para cada campo
  const handlerNombre = (event) => {
    setNombre(event.target.value);
  };

  function handlerDescripcion(event) {
    setDescripcion(event.target.value);
  }

  function handlerFechaIngreso(event) {
    setFechaIngreso(event.target.value);
  }

  function handlerGenero(event) {
    setGenero(event.target.value);
  }

  function limpiarForm() {
    setNombre("");
    setDescripcion("");
    setFechaIngreso("");
    setGenero("Terror");

    if (actualizar) {
      setActualizar(false);

      // al llamar la funcion de esta manera dejamos indefinada la variable libroaActualizar
      handlerActualizarLibro();
    }
  }
  // Manejador del evento submit del formulario
  const handlerSubmit = (event) => {
    event.preventDefault(); // Evita que se recargue la página

    // Creo el objeto libro con sus propiedades
    const libro = {
      id: crypto.randomUUID(), // genera un ID único
      nombre: nombre,
      descripcion: descripcion,
      fechaIngreso: fechaIngreso,
      genero: genero,
    };

    alert(JSON.stringify(libro)); // Se Muestra el libro como prueba

    // Uso dispatch para enviar la acción "agregar" con el libro
    dispatchLibros({
      type: actualizar ? "actualizar" : "agregar",
      libro: actualizar ? { ...libro, id: libroActualizar.id } : libro,
    });

    limpiarForm(); // Se limpia el formulario después que guarda
  };

  return (
    <div style={{ maxWidth: 400, padding: 10, margin: "auto" }}>
      <form id="formLibro" onSubmit={handlerSubmit}>
        <FormControl fullWidth>
          <TextField
            id="nombre"
            label="Nombre"
            variant="outlined"
            size="small"
            fullWidth
            value={nombre}
            onChange={handlerNombre}
            sx={sxFormLibro}
            required
          />
        </FormControl>
        {/* Campo para la descripción (textarea) */}
        <FormControl fullWidth>
          <TextField
            id="descripcion"
            label="Descripción"
            variant="outlined"
            size="small"
            fullWidth
            multiline
            rows={3}
            value={descripcion}
            onChange={handlerDescripcion}
            sx={sxFormLibro}
            required
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            id="fechaIngreso"
            label="Fecha de Ingreso"
            type="date"
            variant="outlined"
            size="small"
            value={fechaIngreso}
            onChange={handlerFechaIngreso}
            sx={sxFormLibro}
            slotProps={{ inputLabel: { shrink: true } }} // para que se vea bien la etiqueta con fecha
            required
          />
        </FormControl>
        {/* Campo select para el género */}
        <FormControl fullWidth>
          <InputLabel id="labelGenero">Género</InputLabel>
          <Select
            labelId="labelGenero"
            id="genero"
            value={genero}
            label="Género"
            onChange={handlerGenero}
            sx={sxFormLibro}
          >
            <MenuItem value={"Terror"}>Terror</MenuItem>
            <MenuItem value={"Fantasía"}>Fantasía</MenuItem>
            <MenuItem value={"Comedia"}>Comedia</MenuItem>
          </Select>
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
    </div>
  );
}
