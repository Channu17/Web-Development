import fs from 'fs';

fs.writeFile('hello.txt', 'Hello, World!', (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully');
    }
});


fs.readFile("hello.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
    } else {
        console.log("File content:", data);
    }
});

// var generateName = require('sillyname');

// console.log(generateName()); // Outputs a random silly name

import  generateName  from 'sillyname';
console.log(generateName()); // Outputs a random silly name


