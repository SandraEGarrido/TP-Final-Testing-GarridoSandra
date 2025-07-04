// Importo React y el hook useContext para acceder al contexto
import React, { useContext } from "react";
// Importo el contexto que contiene el estado y dispatch de las bibliotecas
import { ContextBibliotecas } from "./contextos/index.js";
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

//Componente funcional que lista las Bibliotecas en una Tabla
export default function ListadoBibliotecas() {
  //Extraemos el array de biblioteca y la funcion dispatch dede el contexto
  const { handlerActualizarBiblioteca, bibliotecas, dispatchBibliotecas } = useContext(ContextBibliotecas);

  // Función que se ejecuta al hacer clic en el botón "Eliminar"
  function eliminarBiblioteca(id) {
    // Pregunto al usuario antes de eliminar
    if (confirm("¿Estás seguro de que deseas eliminar la biblioteca?")) {
      // Enviamos una acción al reducer para eliminar la biblioteca con ese ID
      dispatchBibliotecas({ type: "eliminar", id });
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
              <b>
                Dirección<nav></nav>
              </b>
            </TableCell>
            <TableCell>
              <b>Acciones</b>
            </TableCell>
          </TableRow>
        </TableHead>

        {/* Cuerpo de la tabla con los datos de cada biblioteca */}
        <TableBody>
          {bibliotecas.map((biblioteca) => (
            <TableRow key={biblioteca.id}>
              <TableCell>{biblioteca.id}</TableCell>
              <TableCell>{biblioteca.nombre}</TableCell>
              <TableCell>{biblioteca.direccion}</TableCell>
              <TableCell>
                <Button
                  size="small"
                  color="error"
                  variant="contained"
                  onClick={() => eliminarBiblioteca(biblioteca.id)}
                  sx={{ minWidth: "36px", padding: "6px" }}
                >
                  <DeleteIcon fontSize="small" />
                </Button>
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  onClick={() => handlerActualizarBiblioteca(biblioteca)}
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
