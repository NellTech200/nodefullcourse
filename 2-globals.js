// Globals    - no window !!!   

//__dirname  -this gives us the path to current  directory
//__filename -this gives us the file name
// require   -function to use modules(CommonJS)
//module     -info about current module(file)
//process    -info about the environment where the program is being executed


console.log(__dirname)

// this funcion prints the hello world in the console every second and it's some sort of an infinite loop
setInterval(() =>{
    console.log('hello world')
}, 1000)