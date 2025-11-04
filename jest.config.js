// jest.config.js
// 🔹 Este archivo configura Jest para trabajar con componentes React usando un entorno similar al navegador.

export default {
  testEnvironment: "jsdom", // Simula un DOM para que React pueda renderizar componentes
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest", // Usa Babel para traducir JSX
  },
  moduleFileExtensions: ["js", "jsx"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

};
