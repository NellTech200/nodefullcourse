//the file module allows us to interact with file paths easily.
const path = require('path');

//the seperator property which tells or returns a platform specific seperator.
console.log(path.sep);

// the join methode which joins a sequence of path segments using the platform seperator and returns a normalised resulting path.
const filePath = path.join('/content', 'subfolder','test.txt')

console.log(filePath)

//if i want ti get the name of a file i use the basename methode.
const base = path.basename(filePath)
console.log(base)

// this one results in an absolute path, i.e it resolves an absolute path. 
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
