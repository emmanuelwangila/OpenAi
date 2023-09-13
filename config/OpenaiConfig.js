const { Configuration, OpenAIapi} = require('openai');
require ('dotenv').config()


const configuration = new Configuration({
    apiKey:process.env.OPEN_AI_API_KEY
})

const openai = new OpenAIapi(configuration)

module.exports= openai