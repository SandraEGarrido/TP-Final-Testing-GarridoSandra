// buscarLibro.test.js
import { buscarLibro } from "../../funciones";

test("encuentra un libro por su título", () => {
  const libros = [
    { id: 1, nombre: "Cien años de soledad" },
    { id: 2, nombre: "El Principito" },
  ];

  const resultado = buscarLibro(libros, "El Principito");
  expect(resultado).toEqual({ id: 2, nombre: "El Principito" });
});
