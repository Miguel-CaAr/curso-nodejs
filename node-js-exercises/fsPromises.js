//Esto solo en los modulos nativos que no tiene promesas nativas
//const { promisify } = require('node:util');
//const readFilePromise = promisify(fs.readFile)

const fs = require('node:fs/promises');

console.log('---LEYENDO PRIMER ARCHIVO---');
const text1 = fs.readFile('./textos/archivo.txt', 'utf-8')
    .then(text => {
        console.log(text);
    })

console.log('\nHacer cosas mientras se lee el primer archivo..\n');

console.log('---LEYENDO SEGUNDO ARCHIVO---');
const text2 = fs.readFile('./textos/archivo2.txt', 'utf-8')
    .then(text => {
        console.log(text);
    })