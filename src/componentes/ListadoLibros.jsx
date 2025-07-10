// Importo React y el hook useContext para acceder al contexto
import React, { useContext } from "react";
// Importo el contexto que contiene el estado y dispatch de los libros
import { ContextLibros } from "./contextos/index.js";
// Se importan los componentes de tabla y estilo desde Material UI
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

// Se importa el ícono de eliminar
import DeleteIcon from "@mui/icons-material/Delete";

// Se importa el ícono de editar
import EditIcon from "@mui/icons-material/Edit";

//Componente funcional que lista los libros en una Tabla
export default function ListadoLibros() {
  //Extraemos el array de libro y la funcion dispatch dede el contexto
  const { handlerActualizarLibro, libros, dispatchLibros } = useContext(ContextLibros);

  // Función que se ejecuta al hacer clic en el botón "Eliminar"
  function eliminarLibro(id) {
    // Pregunto al usuario antes de eliminar
    if (confirm("¿Estás seguro de que deseas eliminar este libro?")) {
      // Enviamos una acción al reducer para eliminar el libro con ese ID
      dispatchLibros({ type: "eliminar", id });
    }
  }

  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: 900, margin: "auto", marginTop: 4 }}
    >
      <Table>
        {/* Encabezado de la tabla */}
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Id</b>
            </TableCell>
            <TableCell>
              <b>Nombre</b>
            </TableCell>
            <TableCell>
              <b>Descripción</b>
            </TableCell>
            <TableCell>
              <b>Fecha de Ingreso</b>
            </TableCell>
            <TableCell>
              <b>Género</b>
            </TableCell>
            <TableCell>
              <b>Acciones</b>
            </TableCell>
          </TableRow>
        </TableHead>

        {/* Cuerpo de la tabla con los datos de cada libro */}
        <TableBody>
          {libros.map((libro) => (
            <TableRow key={libro.id}>
              <TableCell>{libro.id}</TableCell>
              <TableCell>{libro.nombre}</TableCell>
              <TableCell>{libro.descripcion}</TableCell>
              <TableCell>{libro.fechaIngreso}</TableCell>
              <TableCell>{libro.genero}</TableCell>
              <TableCell sx={{ width: 120 }}>
                <Button
                  size="small"
                  color="error"
                  variant="contained"
                  onClick={() => eliminarLibro(libro.id)}
                  sx={{ minWidth: "36px", padding: "6px" }}
                >
                  <DeleteIcon fontSize="small" />
                </Button>
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  onClick={() => handlerActualizarLibro(libro)}
                  sx={{ minWidth: "36px", padding: "6px" , ml: 1}}
                >
                  <EditIcon fontSize="small" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
