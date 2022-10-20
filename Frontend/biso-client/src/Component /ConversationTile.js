import React from 'react';
import Avatar from './Avatar';

const ConversationTile = ({ name, image }) => {
    return (
        <div className='conversationTile'>
            <div className='user-profil'>
                <Avatar url={image} />
            </div>
            <div className='user-detail'>
                <span className='user-name'>{name}</span>
                <p className='message-label'>salut</p>
            </div>

        </div>
    );
};

export default ConversationTile;