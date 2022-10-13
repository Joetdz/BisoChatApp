import React from 'react';
import ConversationTile from './ConversationTile';
import SenderMessageForm from './SenderMessageForm';


const ChatSecetion = () => {
    return (
        <div className='chatSection'>
            <div className='user-info'>
               <ConversationTile/>
             
            </div>
            <div className='messages-container'>

            </div>
            <div className='sender-messages-container'>
               
                <SenderMessageForm/>
            </div>
            
        </div>
    );
};

export default ChatSecetion;