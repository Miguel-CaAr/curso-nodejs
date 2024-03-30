import mysql from "mysql2/promise";

const config = {
  host: "localhost",
  user: "root",
  password: "",
  database: "moviesdb",
};

const connection = await mysql.createConnection(config);

export class MovieModel {
  static async getAll({ genre }) {
    if (genre) {
      const lowerCaseGenre = genre.toLowerCase();
      //Obtener los IDs de genero utilzando los nombres de genero
      const [genres] = await connection.query(
        "SELECT id, name FROM genre WHERE LOWER(name) = ?;",
        [lowerCaseGenre]
      );

      //Si no se encuentra el genero retorna un array vacio
      if (genres.length === 0) return [];

      //Obtener el ID del primer resultado de genero
      const [{ id }] = genres;

      //Obtener todas las peliculas por genero
      const [movies] = await connection.query(
        `SELECT movie.title, movie.year, movie.director, movie.duration, movie.poster, movie.rate, BIN_TO_UUID(movie.id) id 
        FROM movie
        INNER JOIN movie_genres ON movie.id = movie_genres.movie_id
        INNER JOIN genre ON movie_genres.genre_id = genre.id
        WHERE genre.name = ?;`,
        [lowerCaseGenre]
      );

      return movies;
    }

    const [movies] = await connection.query(
      "SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) id FROM movie;"
    );

    return movies;
  }

  static async getByID({ id }) {
    const [movies] = await connection.query(
      "SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) id FROM movie WHERE id = UUID_TO_BIN(?);",
      [id]
    );

    if (movies.length === 0) return null;

    return movies[0];
  }

  static async create({ input }) {
    const { title, year, director, duration, poster, rate } = input;

    const [uuidResult] = await connection.query("SELECT UUID() uuid;");
    const [{ uuid }] = uuidResult;

    try {
      await connection.query(
        `INSERT INTO movie (id, title, year, director, duration, poster, rate)
          VALUES (UUID_TO_BIN(${uuid}), ?, ?, ?, ?, ?, ?);`,
        [title, year, director, duration, poster, rate]
      );
    } catch (error) {
      throw new Error("Error creating movie");
      //Enviar la traza a un servicio interno
      // sendlog(e)
    }

    const [movies] = await connection.query(
      `SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) id
        FROM movie WHERE id = UUID_TO_BIN(?);`,
      [uuid]
    );

    return movies[0];
  }

  static async delete({ id }) {}

  static async update({ id, input }) {}
}
