// funciones.test.js
// 🔹 Importo la función que quiero probar
import { contarLibros } from "../../funciones";

// 🔹 Defino la prueba unitaria
test("cuenta correctamente la cantidad de libros en la lista", () => {
  // 1️⃣ Creo una lista simulada de libros
  const libros = [
    { id: 1, nombre: "El Principito" },
    { id: 2, nombre: "Cien años de soledad" },
    { id: 3, nombre: "Rayuela" },
  ];

  // 2️⃣ Ejecuto la función
  const resultado = contarLibros(libros);

  // 3️⃣ Verifico que el resultado sea correcto
  expect(resultado).toBe(3);
});
