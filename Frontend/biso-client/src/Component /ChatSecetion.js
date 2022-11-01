import React, { useContext, useState, useEffect } from "react"
import ContactTile from "./ContactTile"
import CardMessage from "./CardMessage"
import { generalContext } from "../GeneralContext"
import axios from "axios"
import { MdAddAPhoto } from "react-icons/md"
import { BiSend } from "react-icons/bi"
import ScrollToBottom from "react-scroll-to-bottom"

const ChatSecetion = () => {
	const { currentConversationWife } = useContext(generalContext)
	const { userconnectedInfo } = useContext(generalContext)
	const [messages, setMessages] = useState()
	const [ isLoading, setIsloading] = useState(true)
	const [contentMessage, setContentMessage] = useState("")
	console.log("contenus des messages", contentMessage)
	console.log("message", messages)
	console.log("message conversation avec", currentConversationWife)


	const getAllmessages= () => {
		axios({
			method: "get",
			url: `http://localhost:35000/conversation/${currentConversationWife._id}`,
			data: {
				moi: userconnectedInfo,
				corespondant: currentConversationWife._id,
			},
		}).then((data) => {
			setMessages(data.data.conversation.message)
			setIsloading(false)
			console.log(data.data)
		})
	}
}
const upload = (e) => {
	console.log(e.target.files)
	const files = e.target.files
	const formData = new FormData()
	formData.append("img", files[0])
	fetch("http://127.0.0.1:8000/api/store", {
		method: "POST",
		body: formData,
	}).then((resp) => {
		resp.json().then((result) => {
			console.log(result)
		})
	})

	const sendMessage = () => {
		axios({
			method: "post",
			url: "http://localhost:35000/message",
			data: {
				id: currentConversationWife._id,
				to: currentConversationWife.corespondant,
				from: userconnectedInfo._id,
				message: contentMessage,
			},
		}).then((data) => {
			console.log(data, " message ajoutée avec succès")
		})
	}

	useEffect(() => {
		getAllmessages()
	}, [currentConversationWife._id])

	return (
		<div className="chatSection">
			<div className="user-info">
				<ContactTile
					name={currentConversationWife && currentConversationWife.name}
					image={currentConversationWife && currentConversationWife.profil}
					label={"En ligne"}
				/>
			</div>
			<div className="messages-container">
				<ScrollToBottom>
					{isLoading
						? "loading"
						: messages.map((message) => {
							return (
								message.message && (
									<CardMessage
										pointer="from"
										message={message.message}
										key={message._id}
									/>
								)
							)
						})}
				</ScrollToBottom>
			</div>
			<div className="sender-messages-container">
				<div className="form">
					<div className="form-send-message">
						<input
							type="text"
							onChange={(e) => {
								setContentMessage(e.target.value)
							}}
						/>
						<label
							htmlFor="i
						file"
							className="file-upload"
						>
							<div className="fileUploadButton">
								<MdAddAPhoto />
							</div>
						</label>
						<input
							accept="image/*"
							id="file"
							type="file"
							style={{ display: "none" }}
							onChange={(e) => upload(e)}
						/>
					</div>
					<button onClick={sendMessage}>
						<BiSend />
					</button>
				</div>
			</div>
		</div>
	)
}

export default ChatSecetion
