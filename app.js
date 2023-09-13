
const readline = require('readline');

const {generateMeta} = require('.controllers//openaicontroller')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdou
})


rl.question('Youtube video title\n ', generateMeta);