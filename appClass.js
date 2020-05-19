const logger = require('./logger') 
const path = require('path');
const os = require('os');
const fs = require('fs');

let pathObj = path.parse(__filename);


//let sayHello = (name) => {
//    console.log('Hello ' + name);}

//console.log(logger);
//console.log(logger);
//logger.log('Santiago');

//console.log(pathObj);

let freeMem = os.freemem();
let totalMem = os.totalmem();

//console.log('free', freeMem);
//console.log('total', totalMem);

logger.log('path', pathObj);
logger.log('free', freeMem);
logger.log('total', totalMem);

//Asincrono
let rootDir = fs.readdirSync('./');
console.log('Asincrono',rootDir);

//Sincrono
fs.readdir('./', (err, files) => {
    (err) ? console.log(err) : console.log('Sincrono', files);
})

/* 1-Crear un metodo para conseguir los archivos en un directorio
2-Crear un metodo para imprimir todos los archivos
3-Crear un metodo para ordenar e imprimir todos los archivos
4-Crear un metodo para obtener la cantidad de archivos que empiezan con alguna letra en particular */

