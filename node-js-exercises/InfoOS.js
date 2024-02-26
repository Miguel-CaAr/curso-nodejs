const os = require('node:os')

console.log('Informacion del sistema operativo');
console.log('---------------------------------');
console.log(`Nombre de usuario: ${os.userInfo().username}`);
console.log(`Nombre asignado al dispositivo: ${os.hostname()}`);
console.log(`Directorio del usuario: ${os.homedir()}`);
console.log(`Nombre del sistema operativo: ${os.platform()}`);
console.log(`Version del sistema operativo: ${os.release()}`);
console.log(`Arquitectura: ${os.arch()}`);
console.log(`CPU's: ${os.cpus().length}`);
console.log(`Memoria total: ${os.totalmem() / 1024 / 1024} MB`);
console.log(`Memoria libre: ${os.freemem() / 1024 / 1024} MB`);
console.log(`Tiempo encendido: 
${os.uptime()} seg
${(os.uptime() / 60).toFixed(2)} min
${(os.uptime() / 60 / 60).toFixed(2)} h 
${(os.uptime() / 60 / 60 / 24).toFixed(2)} d`);