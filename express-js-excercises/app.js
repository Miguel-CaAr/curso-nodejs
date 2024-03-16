const express = require("express");
const crypto = require("node:crypto");
const movies = require("./movies.json");
const { validateMovie } = require("./schemas/movies");

const app = express();
app.use(express.json()); //Ejecutar la funcion middleware express.json()
app.disable("x-powered-by"); //Deshabilitar el header spam de express

//.Todos los recursos que sean MOVIES se identifican con /movies
app.get("/movies", (req, res) => {
  const { genre } = req.query;
  if (genre) {
    const filteredMovies = movies.filter((movie) =>
      movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
    );
    return res.json(filteredMovies);
  }
  res.json(movies);
});

app.post("/movies", (req, res) => {
  const result = validateMovie(req.body);
  if (result.error) {
    return res.status(422).json({ error: JSON.parse(result.error.message) });
  }
  const newMovie = {
    id: crypto.randomUUID(),
    ...result.data,
  };
  movies.push(newMovie);
  res.status(201).json(newMovie); //Actualizar la cache del cliente
});

//Obtener una pelicula por su ID
app.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  const movie = movies.find((movie) => movie.id === id);
  movie
    ? res.json(movie)
    : res.status(404).json({ message: "Movie not found" });
});

const PORT = process.env.PORT ?? 3001;

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
