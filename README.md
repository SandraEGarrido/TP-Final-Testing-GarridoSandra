# 🧪 TP Final – Testing con Jest (React / JavaScript)

## 📘 Descripción
Proyecto del **Trabajo Práctico Final de la materia Testing de Software (IFES – Neuquén)**.  
Incluye la configuración completa de **Jest** y **Babel**, tres **pruebas unitarias** y una **prueba de integración** desarrolladas sobre funciones de gestión de libros.

El objetivo fue comprender y aplicar los conceptos de **pruebas unitarias** e **integración**, asegurando que las funciones del sistema se comporten correctamente y que su interacción sea coherente.

---

## ⚙️ Tecnologías utilizadas
- **React 19**
- **Jest 30**
- **Babel 7**
- **@testing-library/react**

---

## 📂 Estructura principal del proyecto
src/
┣ componentes/
┃ ┗ tests/
┃ ┣ buscarLibro.test.js
┃ ┣ contarLibros.test.js
┃ ┣ eliminarLibro.test.js
┃ ┣ integracion.test.js
┃ ┗ demo.test.js
┗ funciones.js
babel.config.js
jest.config.js
package.json


---

## 🧩 Pruebas realizadas

### 🔹 Pruebas unitarias
1. **`contarLibros.test.js`**  
   Verifica que la función `contarLibros()` calcule correctamente la cantidad de libros de una lista.  
   - *Resultado esperado:* devuelve el número exacto de elementos.

2. **`buscarLibro.test.js`**  
   Comprueba que `buscarLibro()` encuentre un libro específico dentro del array según su título.  
   - *Resultado esperado:* devuelve el objeto correcto o `undefined` si no existe.

3. **`eliminarLibro.test.js`**  
   Evalúa que `eliminarLibro()` elimine correctamente un libro del arreglo sin modificar los demás.  
   - *Resultado esperado:* el array resultante tiene un elemento menos.

---

### 🔸 Prueba de integración
**`integracion.test.js`**  
Combina `eliminarLibro()` y `contarLibros()` para comprobar que, al eliminar un libro,  
la cantidad total se actualice correctamente.  
- *Resultado esperado:* si había 3 libros y se elimina 1, el nuevo conteo es 2.

---

## 🚀 Cómo ejecutar las pruebas

1. Instalar dependencias:
   ```bash
   npm install
