import cors from "cors";

const ACCEPTED_ORIGINS = [
  "http://localhost:8080",
  "http://pagina-inventada.com",
  'http://127.0.0.1:5500',
];

export const corsMiddleWare = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) =>
  cors({
    origin: (origin, callback) => {
      if (acceptedOrigins.includes(origin)) {
        return callback(null, true);
      }
      if (!origin) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
  }); //Middleware para evitar el error de CORS y el PRE-Flight
