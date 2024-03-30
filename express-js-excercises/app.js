import express, { json } from "express";
import { createMovieRouter } from "./routes/movies.js";
import { corsMiddleWare } from "./middlewares/cors.js";

export const createApp = ({ movieModel }) => {
  const app = express();
  app.use(corsMiddleWare());
  app.use(json()); //Ejecutar la funcion middleware express.json()
  app.disable("x-powered-by"); //Deshabilitar el header spam de express

  app.use("/movies", createMovieRouter({ movieModel }));

  const PORT = process.env.PORT ?? 3002;

  app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`);
  });
};
