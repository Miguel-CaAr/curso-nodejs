const path = require("node:path");
//Barra separadora de carpetas segun SO
console.log("Barra separadora de carpetas:", path.sep);
//Unir rutas con path.join
const filePath = path.join("/content", "/subfolder", "/test.txt");
console.log("Rutas unidas: ", filePath);
//Nombre del fichero con extension
const base = path.basename("/tmp/docs/test.txt");
console.log("Nombre del fichero: ", base);
//Nombre del fichero sin la extension
const filename = path.basename("/tmp/docs/test.txt", ".txt");
console.log("Nombre del fichero sin extension: ", filename);
//Unicamente la extension
const ext = path.extname("/tmp/docs/test.txt");
console.log("Extension: ", ext);
