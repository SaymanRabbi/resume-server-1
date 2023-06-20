const {Configuration,OpenAIApi} = require('openai')

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)
exports.PostSkill = async (req, res) => {
    const {skill} = req.body
    const Completion = await openai.createCompletion({
        model: 'gpt-3.5-turbo',
        max_tokens: 512,
        temperature: 0,
        prompt:skill
    })

    res.status(200).json({
        status: "success",
        data: Completion.data.choices[0].text
    })
}