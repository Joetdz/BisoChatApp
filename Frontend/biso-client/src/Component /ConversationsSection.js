import React from 'react';
import ConversationTile from './ConversationTile';
import SearchForm from './SearchForm';

const ConversationsSection = () => {
    return (
        <div className='conversationsSection'>
        <div className='search-form'>
            <SearchForm/>
        </div>
        <div className='recently-conversations'>
        <div className='tilte'>Recent</div>
        <div className='conversations'>
            <ConversationTile/>
            <ConversationTile/>
            <ConversationTile/>
            
        </div>

        </div>
            
        </div>
    );
};

export default ConversationsSection;