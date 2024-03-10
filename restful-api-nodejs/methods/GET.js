const fs = require("node:fs");
/**
 * Funcion para manejar las solicitudes GET
 * @param {*} request 
 * @param {*} response
 */
const reqGET = (request, response, dbFile) => {
    //-----Endpoint-----//
  if (request.url === "/figthers") {
    //-----Leer la BD de peleadores (archivo de texto)----//
    fs.readFile(dbFile, "utf8", (err, data) => {
        //-----Se maneja el error-----//
      if (err) {
        response.writeHead(500);
        response.end("Internal server error");
        return;
      }
      //-----Se envia la respuesta-----//
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(data);
    });
  } else {
    //-----Error en caso de endpoint no existente-----//
    response.writeHead(404);
    response.end('Not found')
}
};
//-----Funcion exportada-----//
module.exports = reqGET;
