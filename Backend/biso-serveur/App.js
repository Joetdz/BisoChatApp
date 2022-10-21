const express = require('express')
const dotenv = require('dotenv')
const mongoose = require("mongoose")
const app = express()
const userRouter = require('./Routes/users')
const messagesRouter = require('./Routes/message')
const { User } = require('./Models/user')
const cors = require('cors');


dotenv.config()

mongoose.connect(process.env.MONGO_URL, {

})
    .then(() => console.log('connecté  à Mongo DB'))
    .catch(err => console.log(err))
app.use(cors())
app.use(express.json())
app.use('/', userRouter)
app.use('/', messagesRouter)


app.listen(process.env.PORT, () => {
    console.log(' le serveurs est lancé sur le prot', process.env.PORT)
})
