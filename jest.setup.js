// jest.setup.js
import { TextEncoder, TextDecoder } from "util";

// Defino globalmente TextEncoder y TextDecoder para Jest
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
