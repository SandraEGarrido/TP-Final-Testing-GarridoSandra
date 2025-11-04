🧪 TP Final – Testing con Jest (React / JavaScript)
📘 Descripción

Proyecto del Trabajo Práctico Final de la materia Testing de Software (IFES – Neuquén).
Incluye la configuración completa de Jest y Babel, tres pruebas unitarias, una prueba de integración, y una prueba Snapshot sobre componentes de React.

El objetivo fue aplicar los conceptos de pruebas unitarias, integración y snapshot, asegurando que tanto las funciones lógicas como los componentes visuales del sistema funcionen correctamente.

⚙️ Tecnologías utilizadas

⚛️ React 19

🧪 Jest 30

🧬 Babel 7

🧰 @testing-library/react

📂 Estructura principal del proyecto
src/
 ┣ componentes/
 ┃ ┗ tests/
 ┃ ┣ buscarLibro.test.js
 ┃ ┣ contarLibros.test.js
 ┃ ┣ eliminarLibro.test.js
 ┃ ┣ integracion.test.js
 ┃ ┗ NavBarSnapshot.test.js
 ┗ funciones.js

babel.config.js
jest.config.js
package.json

🧩 Pruebas realizadas
🔹 Pruebas unitarias

contarLibros.test.js
Verifica que la función contarLibros() calcule correctamente la cantidad de libros de una lista.
✅ Resultado esperado: devuelve el número exacto de elementos.

buscarLibro.test.js
Comprueba que buscarLibro() encuentre un libro específico dentro del array según su título.
✅ Resultado esperado: devuelve el objeto correcto o undefined si no existe.

eliminarLibro.test.js
Evalúa que eliminarLibro() elimine correctamente un libro del arreglo sin modificar los demás.
✅ Resultado esperado: el array resultante tiene un elemento menos.

🔸 Prueba de integración

integracion.test.js
Combina eliminarLibro() y contarLibros() para comprobar que, al eliminar un libro, la cantidad total se actualice correctamente.
✅ Resultado esperado: si había 3 libros y se elimina 1, el nuevo conteo es 2.

📸 Prueba Snapshot – Comportamiento visual del NavBar

Esta prueba está basada en el componente NavBar, específicamente en el botón “Libros”.
Su objetivo es verificar que el color de fondo cambie correctamente cuando el usuario pasa el mouse por encima (hover) y luego vuelva al estado original.

Se utilizan Snapshots de Jest, que capturan la estructura renderizada del componente en distintos momentos:

Estado inicial: antes del hover.

Durante el hover: con el color modificado.

Después del hover: cuando el color vuelve a su estado normal.

Jest guarda automáticamente estos tres estados dentro de un archivo de snapshot.
Cada bloque representa una “foto técnica” del componente renderizado.
Si en futuras versiones el componente cambia su estructura o estilos, Jest alertará que el snapshot ya no coincide, permitiendo detectar cambios visuales no intencionados.

🗣️ En mi defensa oral explico que esta prueba no evalúa lógica, sino el comportamiento visual del componente, asegurando consistencia en la interfaz.

🚀 Cómo ejecutar las pruebas

Instalar dependencias

npm install


Ejecutar todas las pruebas

npm test


Actualizar los snapshots (si se modificó el componente)

npm test -- -u

👩‍💻 Autora

Sandra E. Garrido
📍 IFES – Neuquén
📎 Repositorio en GitHub