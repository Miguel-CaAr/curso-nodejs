import fs from "fs";
import { yarg } from "./config/plugins/args-plugin";

const { b: base, l: limit, s: showTable } = yarg;

let outputMessage = "";
const headerMessage = `
=======================
    Tabla del ${base}
=======================
\n`;

for (let i = 1; i <= limit; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;
if (showTable) {
  console.log(outputMessage);
}

const outputPath = `outputs/`;

fs.mkdirSync(outputPath, { recursive: true }); // Aqui se crea la carpeta outputs y recursive en true es para crear todos los directorios de forma recursiva

fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage); //Aqui se crea un archivo table en al ruta output
console.log("File Created!");
