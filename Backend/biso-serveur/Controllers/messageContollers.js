const { Conversation } = require('../Models/Conversation')

const addConversation = async (req, res,) => {
    await Conversation.create({
        participans: [
            {
                id: '1',
                name: 'joel',
                mail: 'joel',
                profil: 'hhhhd'
            },
            {
                id: '2',
                name: 'landrr',
                mail: 'landry',
                profil: 'hhhhd'
            }
        ],

        message: [
            {
                from: '2',
                to: '1',
                content: 'bonjour landry'

            }
        ]


    })
        .then(message => {
            console.log(message)
            res.status(200).json(message)
            res.end()
        })
}

module.exports = { addConversation }