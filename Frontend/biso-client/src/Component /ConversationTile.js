import React from 'react';
import Avatar from './Avatar';

const ConversationTile = () => {
    return (
        <div className='conversationTile'>
            <div className='user-profil'>
                <Avatar/>
            </div>
            <div className='user-detail'>
                <h2 className='user-name'>Joel</h2>
                <p className='message-label'>salut</p>

            </div>
            
        </div>
    );
};

export default ConversationTile;