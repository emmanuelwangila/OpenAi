const { Configuration, OpenAIapi} = require('openai');
require ('dotenv').config()


const Configuration = new Configuration({
    apiKey:process.env.OPEN_AI_API_KEY
})

const openai = new OpenAIapi(configuration)

module.exports= openai