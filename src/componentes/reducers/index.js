//Función reductora que recibe el estado actual (libros) y una acción a realizar
export function librosReducer(libros, action) {
  switch (action.type) {
    case "agregar":
      return [...libros, action.libro];
    case "actualizar":
      return libros.map((libro) => {
        if (libro.id === action.libro.id) {
          //delete action.libro.id;
          return action.libro;
        }
        return libro;
      });
    case "eliminar":
      return libros.filter((libro) => libro.id !== action.id);
    default:
      throw Error("Esta acción no está contemplada");
  }
}

//Función reductora que recibe el estado actual (bibliotecas) y una acción a realizar
export function bibliotecasReducer(bibliotecas, action) {
  switch (action.type) {
    case "agregar":
      return [...bibliotecas, action.biblioteca];
     case "actualizar":
      return bibliotecas.map((biblioteca) => {
        if (biblioteca.id === action.biblioteca.id) {
          //delete action.libro.id;
          return action.biblioteca;
        }
        return biblioteca;
      });
    case "eliminar":
      return bibliotecas.filter((biblioteca) => biblioteca.id !== action.id);
    default:
      throw Error("Acción no válida");
  }
}
