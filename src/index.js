import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./componentes/App.jsx"

// Borra el contenido HTML existente
document.body.innerHTML = '<div id="app"></div>';

// Renderiza tu componente React en su lugar
const root = createRoot(document.getElementById('app'));
root.render(<App />);