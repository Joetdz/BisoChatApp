const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const app = express()
const http = require("http")
const userRouter = require('./Routes/users')
const messagesRouter = require('./Routes/message')
const { User } = require('./Models/user')
const cors = require('cors')
const { Server } = require("socket.io")

const server = http.createServer(app)




dotenv.config()

mongoose.connect(process.env.MONGO_URL, {

})
	.then(() => console.log('connecté  à Mongo DB'))
	.catch(err => console.log(err))
app.use(cors())
const io = new Server(server, {
	cors: {
		origin: "http://localhost:3000",
		methodes: ["GET", "POST"]
	}
})
app.use(express.json())
app.use('/', userRouter)
app.use('/', messagesRouter)

io.on("connection", (socket) => {
	console.log(`utilisateur connectter : ${socket.id}`)
	socket.on("send_message", (data)=>{
	console.log(data)

	socket.broadcast.emit("receive_message" ,data)
})
})




server.listen(process.env.PORT, () => {
	console.log(' le serveurs est lancé sur le prot', process.env.PORT)
})
