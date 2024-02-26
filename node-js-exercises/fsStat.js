const fs = require('node:fs');

const stats = fs.statSync('./package.json')

console.log(`Es un fichero?: ${stats.isFile()}`);
console.log(`Es un directorio?: ${stats.isDirectory()}`);
console.log(`Es un directorio simbolico?: ${stats.isSymbolicLink()}`);
console.log(`Tamaño: 
${stats.size} bytes
${(stats.size / 1024).toFixed(2)} kb
${(stats.size / 1024 / 1024).toFixed(2)} mb
${(stats.size / 1024 / 1024 / 1024).toFixed(2)} gb
`);