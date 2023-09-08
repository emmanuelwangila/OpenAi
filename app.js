
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdou
})


rl.question('Youtube video title\n ', (title) => console.log(title));