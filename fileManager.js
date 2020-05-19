const fs = require('fs');

rootDir = (path) =>{
    return fs.readdirSync(path);
};

printDir = (path) =>{
    console.log('Archivos en el directorio:',rootDir(path));
}

printReverseSort = (path) =>{
    arrayFiles = rootDir(path);
    console.log('Reverse sort: ',arrayFiles.sort().reverse());
}

printByLetter = (path, letterSearch) =>{
    let arrayFiles = rootDir(path);
    let letter = letterSearch;
    let tempArray = [];
    //console.log(arrayFiles[2]);

    for (var i = 1; i < arrayFiles.length; i++) {
        let element = arrayFiles[i];
        let tempElement = element.substring(0,1);
        if(tempElement === letter){
            tempArray.push(element);
        }
    }
    console.log(tempArray);
}

module.exports.printReverseSort = printReverseSort;
module.exports.rootDir = rootDir;
module.exports.printDir = printDir;
module.exports.printByLetter = printByLetter;