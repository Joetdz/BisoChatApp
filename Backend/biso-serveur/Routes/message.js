const express = require('express');
const router = express.Router()
const { addConversation, getMyConversations, deleteAll } = require('../Controllers/messageContollers')


router.post('/convAdd', addConversation)
router.get('/convesations/', getMyConversations)
router.get('/delete', deleteAll)


module.exports = router














module.exports = router 