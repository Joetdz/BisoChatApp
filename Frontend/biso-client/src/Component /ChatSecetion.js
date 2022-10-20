import React from 'react';
import ConversationTile from './ConversationTile';
import SenderMessageForm from './SenderMessageForm';
import CardMessage from './CardMessage';

const ChatSecetion = () => {

    return (
        <div className='chatSection'>
            <div className='user-info'>
                <ConversationTile />

            </div>
            <div className='messages-container'>
                <CardMessage pointer='me' message='' />
            </div>
            <div className='sender-messages-container'>

                <SenderMessageForm />
            </div>

        </div>
    );
};

export default ChatSecetion;