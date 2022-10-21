
const express = require('express');
const { getUser, logIn, getAllUsers, signIn, deleteUser } = require('../Controllers/userControllers');
const router = express.Router()


router.get('/users', getAllUsers)
router.get('/user/:id', getUser)
router.post('/signin', signIn)
router.post('/login', logIn)
router.get('/delete', deleteUser)



module.exports = router 
