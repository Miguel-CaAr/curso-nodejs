import fs from "fs";

let outputMessage = "";
const base = 5;
const headerMessage = `
=======================
    Tabla del ${base}
=======================
\n`;

for (let i = 1; i <= 10; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;

console.log(outputMessage);

const outputPath = `outputs/`

fs.mkdirSync(outputPath, {recursive: true})// Aqui se crea la carpeta outputs y recursive en true es para crear todos los directorios de forma recursiva

fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage ) //Aqui se crea un archivo table en al ruta output
console.log('File Created!');
