const openai = require('../config/OpenaiConfig')


const generateMeta = async (title) => {

    const  description = await openai.createChatcompletion({
        model:'gpt-3.5-turbo',
        message: [
            {
                role: 'user',
                content: `Come up with a description for a Youtube video called ${title}`
            }
        ],
        max_tokens: 100

    })

    console.log(description.data.choices[0].message)

}

module.exports = {generateMeta}