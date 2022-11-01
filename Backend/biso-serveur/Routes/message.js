const express = require('express');
const router = express.Router()
const { addConversation, getMyConversations, deleteAll, addMessage, getAllmessagesOfConversation } = require('../Controllers/messageContollers')


router.post('/convAdd', addConversation)
router.get('/conversations/:id', getMyConversations)
router.get('/delete', deleteAll)
router.post('/message', addMessage)
router.get('/conversation/:id', getAllmessagesOfConversation)
    

module.exports = router














module.exports = router 