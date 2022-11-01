import React from "react"

const CardMessage = ({ message, pointer }) => {
	return (
		<div className={pointer}>
			<p className="message-content ">{message}</p>
		</div>
	)
}
//

export default CardMessage
