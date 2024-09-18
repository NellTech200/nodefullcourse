const items = ['item1', 'item2' ]
const person = {
    name: 'bob',
    age: '30'
}

//in the above code, we could just write it like this to save us some space during the writing of our code

module.exports.items = ['item1','item2']
module.exports.person = {
    name: 'bob'
}

// this is another syntax for exporting 
module.exports.singlePerson = person