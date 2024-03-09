const http = require("node:http");
const { findAvailablePort } = require("./freePort.js");

const desiredPort = process.env.PORT ?? 3000;

//Se crea una instancia de servidor usando el modulo http de node con la funcion 'createServer' que
//  recibe una funcion que toma dos argumentos, la request y el response
const server = http.createServer((req, res) => {
  console.log("Request recibida");
  res.end("Hola!");
});
//Se usa la instancia de servidor y su metodo listen para escuchar un puerto, en el primer argumento
//  se define el puerto que en este caso es el 0 (el puerto 0 busca un puerto disponible y lo utiliza)
//  se usa la funcion 'address()' para obtener el objeto y su propiedad 'port' para el puerto
findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${port}`);
  });
});
