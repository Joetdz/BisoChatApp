const { Conversation } = require('../Models/Conversation')

const deleteAll = async (req, res) => {
    Conversation.deleteMany({})
        .then(res => console.log(res))
    res.end
}

const addConversation = async (req, res,) => {
    await Conversation.find({
        moi: req.body.moi, corespondant: req.body.corespondant
    })
        .then(conversation => {
            console.log('la conversation existe', conversation)
            if (conversation.length === 0) {
                Conversation.find({
                    moi: req.body.corespondant, corespondant: req.body.moi
                })

                    .then(conversation => {
                        console.log('la conversation  existe 2', conversation)
                        if (conversation.length === 0) {
                            Conversation.create({
                                ...req.body
                            })
                                .then(conversation => {
                                    res.status(200).json(conversation)
                                    console.log('la conversation a été créée avec succès', conversation)
                                })
                                .catch(err => console.log(err))
                        } else {

                        }
                    })

            }


        })
}


const getMyConversations = async (req, res) => {
    await Conversation.find({ $or: [{ moi: req.params.id }, { corespondant: req.params.id }] })
        .then(conversations => {
            console.log(conversations)
            res.status(200).json(conversations)
            res.end()
        })
        .catch(err => res.status(404).json(err))
}


module.exports = { addConversation, getMyConversations, deleteAll }