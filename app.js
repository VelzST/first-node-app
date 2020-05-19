/* 1-Crear un metodo para conseguir los archivos en un directorio
2-Crear un metodo para imprimir todos los archivos
3-Crear un metodo para ordenar e imprimir todos los archivos
4-Crear un metodo para obtener la cantidad de archivos que empiezan con alguna letra en particular 

1 - Create a method to get all the files inside a given path
2 - Create a method to Print all the files
3 - Create a method to sort and print the files
4 - Create a method to get the amount of files starting with one letter */

const fileManager = require('./fileManager');
const fs = require('fs');
const path = require('path');


let pathObj = path.parse(__filename);
let pathDir = pathObj.dir;


//Conseguir e imprimir archivos en el directorio dado
console.log('Primera forma para mostrar:');
console.log('Archivos en el directorio:', fileManager.rootDir(pathDir));

console.log('Segunda forma para mostrar:');
fileManager.printDir(pathDir);

//Ordenar e imprimir los archivos alfabeticamente inverso
fileManager.printReverseSort(pathDir);

//Mostrar archivos que empiezen con una determinada letra

let letter = 'f';

console.log("Array filtrado por letra inicial", letter+":");

fileManager.printByLetter(pathDir, letter);
