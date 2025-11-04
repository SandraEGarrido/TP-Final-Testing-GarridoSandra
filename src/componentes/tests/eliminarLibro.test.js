// eliminarLibro.test.js
import { eliminarLibro } from "../../funciones";

// 🔹 Test para verificar que la función elimina correctamente un libro por su id
test("elimina el libro indicado por id", () => {
  // 1️⃣ Lista simulada de libros
  const libros = [
    { id: 1, nombre: "Cien años de soledad" },
    { id: 2, nombre: "El Principito" },
    { id: 3, nombre: "Rayuela" },
  ];

  // 2️⃣ Llamo a la función para eliminar el libro con id 2
  const resultado = eliminarLibro(libros, 2);

  // 3️⃣ Verifico que el resultado ya no contenga ese libro
  expect(resultado).toHaveLength(2);
  expect(resultado.find((l) => l.id === 2)).toBeUndefined();
});
