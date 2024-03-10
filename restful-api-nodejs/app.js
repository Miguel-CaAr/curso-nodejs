//-----Importacion del modulo-----//
const http = require("node:http");
const fs = require("node:fs");
//-----Funciones para manejar solicitudes-----//
const reqGet = require('./methods/GET')

//-----Creacion de la carpeta y el JSON que sera la BD-----//
const dbPath = "database";
const dbFile = "database/figthers.json";
if (!fs.existsSync(dbPath)) {
  fs.mkdirSync(dbPath);
  fs.writeFileSync(dbFile, "[]");
}

//-----Creacion del servidor HTTP-----//
const server = http.createServer((request, response) => {
  //-----Obtencion de la URL y metodo HTTP-----//
  const { url, method } = request;

  //-----Manejo de la solicitud dependiendo del metodo HTTP-----//
  switch (method) {
    case "GET":
      reqGet(request, response, dbFile)
      break;
    case "POST":
      response.writeHead(200);
      response.end("Excelente");
      break;
    case "PUT":
      response.writeHead(200);
      response.end("Excelente");
      break;
    case "DELETE":
      response.writeHead(200);
      response.end("Excelente");
      break;
    default:
      //Respuesta en caso de que el method no sea valido
      response.writeHead(405);
      response.end("Method not allowed");
      break;
  }
});

//----Se escucha el puerto----//
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
