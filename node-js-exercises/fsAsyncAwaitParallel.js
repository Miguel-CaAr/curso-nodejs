const { readFile } = require('node:fs/promises');

Promise.all([
    readFile('./textos/archivo.txt', 'urf-8'),
    readFile('./textos/archivo2.txt', 'urf-8'),
]).then(([text, secondText]) => {
    console.log('Primer texto', text);
    console.log('Segundo texto', secondText);
})