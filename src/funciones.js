// funciones.js
// 🔹 Esta función recibe un array de libros y devuelve cuántos hay
export function contarLibros(libros) {
  return libros.length;
}

// funciones.js
export function buscarLibro(libros, titulo) {
  return libros.find((libro) => libro.nombre === titulo);
}

// 🔹 Esta función recibe una lista de libros y un id, y devuelve una nueva lista sin ese libro.
export function eliminarLibro(libros, id) {
  return libros.filter((libro) => libro.id !== id);
}