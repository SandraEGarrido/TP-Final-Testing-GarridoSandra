import React, { useState, useEffect, useContext, useReducer } from "react";

import ListadoLibros from "./ListadoLibros.jsx";
import ListadoBibliotecas from "./ListadoBibliotecas.jsx";
import FormLibro from "./FormLibro.jsx";
import { librosReducer } from "./reducers/index.js";
import { ContextLibros } from "./contextos/index.js";
import FormBiblioteca from "./FormBiblioteca.jsx";
import { bibliotecasReducer } from "./reducers/index.js";
import { ContextBibliotecas } from "./contextos/index.js";

import NavBar from "./NavBar.jsx";

import {
  createBrowserRouter,
  Outlet,
  Route,
  Routes,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", Component: Layout },
  { path: "*", Component: Root },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/libros" element={<LibrosApp />} />
        <Route path="/bibliotecas" element={<BibliotecasApp />} />
        <Route path="*" element={<NoExistePagina />} />
      </Route>
    </Routes>
  );
}

function NoExistePagina() {
  return <h1>Error, la página no existe</h1>;
}

function LibrosApp() {
  return (
    <>
      <FormLibro />
      <ListadoLibros />
    </>
  );
}

function BibliotecasApp() {
  return (
    <>
      <FormBiblioteca />
      <ListadoBibliotecas />
    </>
  );
}

const initialLibros = JSON.parse(localStorage.getItem("libros")) || [];
const initialBibliotecas =
  JSON.parse(localStorage.getItem("bibliotecas")) || [];

function Layout() {
  const sxApp = {
    display: "flex",
    justifyContent: "center",
  };

  const navigate = useNavigate();

  const [libros, dispatchLibros] = useReducer(librosReducer, initialLibros);
  const [libroActualizar, setLibroActualizar] = useState();

  const [bibliotecas, dispatchBibliotecas] = useReducer(
    bibliotecasReducer,
    initialBibliotecas
  );
  const [bibliotecaActualizar, setBibliotecaActualizar] = useState();

  useEffect(() => {
    // actualizamos la base de datos local del navegador
    // cuando se actualiza el listado de personas
    localStorage.setItem("libros", JSON.stringify(libros));

    navigate("/libros");
  }, [libros]);
  useEffect(() => {
    localStorage.setItem("bibliotecas", JSON.stringify(bibliotecas));
  }, [bibliotecas]);

  function handlerActualizarLibro(libroQueVoyActualizar) {
    setLibroActualizar(libroQueVoyActualizar);
  }
  function handlerActualizarBiblioteca(bibliotecaQueVoyActualizar) {
    setBibliotecaActualizar(bibliotecaQueVoyActualizar);
  }

  return (
    <>
      <NavBar />
      <div style={sxApp}>
        <ContextLibros.Provider
          value={{
            libroActualizar: libroActualizar,
            handlerActualizarLibro: handlerActualizarLibro,
            libros: libros,
            dispatchLibros: dispatchLibros,
          }}
        >
          <ContextBibliotecas.Provider
            value={{
              bibliotecaActualizar: bibliotecaActualizar,
              handlerActualizarBiblioteca: handlerActualizarBiblioteca,
              bibliotecas: bibliotecas,
              dispatchBibliotecas: dispatchBibliotecas,
            }}
          >
            <Outlet />
          </ContextBibliotecas.Provider>
        </ContextLibros.Provider>
      </div>
    </>
  );
}
