const fs = require('node:fs');

console.log('---LEYENDO PRIMER ARCHIVO---');
const text1 = fs.readFile('./textos/archivo.txt', 'utf-8', (err, text) => {
    console.log(text);
})
console.log('\nHacer cosas mientras se lee el primer archivo..\n');
console.log('---LEYENDO SEGUNDO ARCHIVO---');
const text2 = fs.readFile('./textos/archivo2.txt', 'utf-8', (err, text) => {
    console.log(text);
})