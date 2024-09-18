//the file module 
const { readFileSync, writeFileSync } = require('fs');

// the commands bellow will read through the files created in the content directory. even without exporting them manually.
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

// the comand bellow will check if there is an already existing directory, but if not, then it will create one with the content which is provided.

writeFileSync('./content/results.txt', `Here is the results : ${first}, ${second}`)

//if i want to open the file directory, i just need to add aother feature. (the FLAG methode)
writeFileSync('./content/results.txt', `Here is the results : ${first}, ${second}`, { flag: 'a' })