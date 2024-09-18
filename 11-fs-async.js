// the asynchronouse. here we deal with call backs, (in the same way an event listener will work for a button, we also have something similar to that when it comes async.)
const { readFile, writeFile } = require('fs')

console.log('start')
//if we don't provide the utf8 function, we will get but a buffer as result
readFile('./content/first.txt', 'utf8', (err,result) => {
    if (err) {
        console.log(err)
        return
    }
    //console.log(result);
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/results.txt',
            `Here is the result : ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done with this task')
               // console.log(result)
            }
        )
    })
    
})
console.log('starting next task')

// it is true that it is a little bit messy and confusing but very capital for it detaily explains to us the difference between ASYNCHRONOUS and SYNCHRONOUS methods in code writting 
// if we were to put some console logs in the codes for asu=ync and sync, we would see the different places for executions 
