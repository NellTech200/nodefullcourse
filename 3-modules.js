// MODULES
//CommonJS, every file is module (by default)
// Modules  -Encapsulated Code (only share minimum)

// modules help us to segment our app into different files 

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavour')
require('./7-mind-grenade')
//console.log(names)

console.log(data)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)