
const readline = require('readline');

const {generateMeta} = require('./controllers/openaiController')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdou
})


rl.question('Youtube video title\n ', generateMeta);