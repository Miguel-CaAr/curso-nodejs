const fs = require("node:fs");
/**
 * Funcion para manejar las solicitudes POST
 * @param {*} request
 * @param {*} response
 * @param {*} dbFile
 */
const reqPOST = (request, response, dbFile) => {
  //-----Validar el endpoint-----//
  if (request.url === "/fighters" && request.method === "POST") {
    //-----Leer el cuerpo de la solicitud-----//
    let body = "";
    //-----Se escucha el evento "data"-----//
    request.on("data", (chunk) => {
      body += chunk.toString(); //Cada que ocurra el evento se añade el chunk de datos a body
    });

    request.on("end", () => {
      try {
        const newData = JSON.parse(body);
        //-----Leemos DB actual-----//
        fs.readFile(dbFile, "utf8", (err, _data) => {
          if (err) {
            response.writeHead(500);
            response.end("Internal server error");
            return;
          }
          //-----Parseo de DB y adicion de datos-----//
          const db = JSON.parse(_data);
          db.push(newData);
          //-----Guardar los nuevos datos-----//
          fs.writeFile(dbFile, JSON.stringify(db), (err) => {
            if (err) {
              response.writeHead(500);
              response.end("Internal server error");
              return;
            }
            //----Respondemos que se ha guardado con exito
            response.writeHead(201, { "Content-Type": "application/json" });
            response.end(JSON.stringify(newData));
          });
        });
      } catch (error) {
        response.writeHead(400);
        response.end("Bad Request");
      }
    });
  } else {
    response.writeHead(404);
    response.end("Not found");
  }
};

module.exports = reqPOST;
