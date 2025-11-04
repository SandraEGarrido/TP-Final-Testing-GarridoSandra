// babel.config.js
// ✅ Este archivo le indica a Babel cómo debe transformar el código de React
// para que Jest pueda entender JSX en los tests.

module.exports = {
  presets: [
    "@babel/preset-env",   // 🔹 Traduce las nuevas características de JavaScript
    "@babel/preset-react"  // 🔹 Traduce JSX (código de React)
  ],
};
