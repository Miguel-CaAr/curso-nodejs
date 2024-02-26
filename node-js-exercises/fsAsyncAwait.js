//Esto solo en los modulos nativos que no tiene promesas nativas
//const { promisify } = require('node:util');
//const readFilePromise = promisify(fs.readFile)

const { readFile } = require('node:fs/promises');

// IIFE: Inmediatly Invoked Funcito Expression
(
    async () => {
        console.log('---LEYENDO PRIMER ARCHIVO---');
        const text1 = await readFile('./textos/archivo.txt', 'utf-8')
        console.log(text1);
        
        console.log('\nHacer cosas mientras se lee el primer archivo..\n');
        
        console.log('---LEYENDO SEGUNDO ARCHIVO---');
        const text2 = await readFile('./textos/archivo2.txt', 'utf-8')
        console.log(text2);
    }
)() 

//Es lo mismo que
// async function main (){
//     console.log('---LEYENDO PRIMER ARCHIVO---');
//     const text1 = await readFile('./textos/archivo.txt', 'utf-8')
//     console.log(text1);
    
//     console.log('\nHacer cosas mientras se lee el primer archivo..\n');
    
//     console.log('---LEYENDO SEGUNDO ARCHIVO---');
//     const text2 = await readFile('./textos/archivo2.txt', 'utf-8')
//     console.log(text2);
// }
// main()

