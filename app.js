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
console.log('asincrono');
let rootDir = fs.readdirSync('./');
console.log(rootDir);

//Sincrono
console.log('Sincrono');
fs.readdir('./', (err, files) => {
    (err) ? console.log(err) : console.log(files);
})


