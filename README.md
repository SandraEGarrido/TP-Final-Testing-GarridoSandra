# 📚 Gestión de Libros y Bibliotecas

Este proyecto es una aplicación web desarrollada con React, Webpack y Material UI. Fue creado como trabajo práctico final y permite gestionar entidades relacionadas con libros y bibliotecas de forma eficiente y moderna.

## 🚀 Funcionalidades principales

- ✅ Alta, baja y modificación de **Libros**
- ✅ Alta, baja y modificación de **Bibliotecas**
- ✅ Navegación entre rutas con React Router
- ✅ **Login y cierre de sesión simulado**
- ✅ Uso de contexto para compartir estado global
- ✅ Diseño responsive con Material UI
- ✅ Despliegue en Vercel

## 🔐 Autenticación

El sistema incluye un módulo de login **simulado**, pensado para fines prácticos y demostrativos. Al ingresar, el usuario accede a las funcionalidades privadas de la aplicación.  
También se incluye un botón de **cerrar sesión** que redirige al login y borra el estado del usuario desde el contexto.

⚠️ *Este módulo no valida credenciales reales ni consulta a bases de datos externas.*

## 🛠️ Tecnologías utilizadas

- ⚛️ React 19
- 🧭 React Router DOM 7
- 🎨 Material UI
- 📦 Webpack
- 🔤 Babel
- ☁️ Vercel (deploy)

## 📦 Instalación local

Para correr el proyecto en tu computadora:

```bash
npm install
npm run web
```

Esto levanta el servidor local en `http://localhost:8080`.

## 🌐 Enlace en producción

👉 [Ver app online en Vercel](https://react-parcial-garrido-completo-copi.vercel.app/libros)

## 🗂️ Estructura del proyecto

- `src/componentes/` → Componentes como `FormLibro`, `ListadoLibros`, `NavBar`, `Login`, etc.
- `src/contextos/` → Contextos como `ContextLibros`, `ContextBibliotecas`, etc.
- `src/reducers/` → Reducers para manejar estados complejos (como libros y bibliotecas).
- `public/` → `index.html` y recursos estáticos

## ✍️ Autora

**Sandra Garrido**  
Trabajo práctico final — Curso de React  
Argentina, 2025