// integracion.test.js
import { contarLibros, eliminarLibro } from "../../funciones";

// 🔹 Esta prueba integra dos funciones: eliminar y contar libros
test("al eliminar un libro, el contador se actualiza correctamente", () => {
  // 1️⃣ Lista inicial simulada
  const libros = [
    { id: 1, nombre: "Cien años de soledad" },
    { id: 2, nombre: "El Principito" },
    { id: 3, nombre: "Rayuela" },
  ];

  // 2️⃣ Primero contamos los libros originales
  const cantidadInicial = contarLibros(libros);
  expect(cantidadInicial).toBe(3);

  // 3️⃣ Luego eliminamos uno (por id)
  const nuevaLista = eliminarLibro(libros, 2);

  // 4️⃣ Contamos de nuevo
  const cantidadFinal = contarLibros(nuevaLista);

  // 5️⃣ Afirmamos que el total ahora es 2
  expect(cantidadFinal).toBe(2);
});
