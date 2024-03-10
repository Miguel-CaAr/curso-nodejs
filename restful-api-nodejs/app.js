//-----Importacion del modulo-----//
const http = require("node:http");
const fs = require("node:fs");
//-----Funciones para manejar solicitudes-----//


//-----Creacion de la carpeta y el archivo que sera la BD-----//
if (!fs.existsSync("database")) {
  fs.mkdirSync("database");
  fs.writeFileSync(
    "database/figthers.txt",
    "Database figthers UFC:"
  );
}

//-----Creacion del servidor HTTP-----//
const server = http.createServer((request, response) => {
  //-----Obtencion de la URL y metodo HTTP-----//
  const { url, method } = request;

  //-----Manejo de la solicitud dependiendo del metodo HTTP-----//
  switch (method) {
    case 'GET':
        response.writeHead(200);
        response.end('Excelente')
        break;
    case 'POST':
        response.writeHead(200);
        response.end('Excelente')
        break;
    case 'PUT':
        response.writeHead(200);
        response.end('Excelente')
        break;
    case 'DELETE':
        response.writeHead(200);
        response.end('Excelente')
        break;
    default:
        //Respuesta en caso de que el method no sea valido
        response.writeHead(405);
        response.end('Method not allowed')
        break;
  }
});

//----Se escucha el puerto----//
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
