// ✅ En esta prueba verifico que el botón "Libros" cambia visualmente su color
// al pasar el mouse por encima, usando snapshots para comparar los estados.

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../NavBar";

test("prueba cambio de color del botón Libros con snapshots", () => {
  // 1️⃣ Renderizo el componente NavBar dentro de un MemoryRouter
  // porque el NavBar usa <Link> y necesita el contexto de React Router.
  const { asFragment, getByRole } = render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );

  // 2️⃣ Busco el botón por su texto visible
  const botonLibros = screen.getByText("Libros");

  // 🔸 Snapshot 1: Estado inicial (sin hover)
  expect(asFragment()).toMatchSnapshot();

  // 🔸 Snapshot 2: Simulo el evento de pasar el mouse por encima (hover)
  // Esto reproduce el comportamiento que el usuario vería visualmente.
  fireEvent.mouseEnter(botonLibros);
  expect(asFragment()).toMatchSnapshot();

  // 🔸 Snapshot 3: Simulo el evento de quitar el mouse (volver al estado original)
  fireEvent.mouseLeave(botonLibros);
  expect(asFragment()).toMatchSnapshot();
});
