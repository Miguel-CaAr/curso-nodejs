import express, { json } from "express";
import { moviesRouter } from "./routes/movies.js";
import { corsMiddleWare } from "./middlewares/cors.js";

const app = express();
app.use(corsMiddleWare());
app.use(json()); //Ejecutar la funcion middleware express.json()
app.disable("x-powered-by"); //Deshabilitar el header spam de express

app.use("/movies", moviesRouter);

const PORT = process.env.PORT ?? 3002;

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
