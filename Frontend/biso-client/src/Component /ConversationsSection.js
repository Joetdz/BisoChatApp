import React, { useState, useEffect } from 'react';
import ConversationTile from './ContactTile';
import SearchForm from './SearchForm';
import axios from 'axios';

const ConversationsSection = () => {
    const [consversation, setConversations] = useState()
    const getConversations = () => {
        axios({
            method: 'get',
            url: 'http://localhost:35000/users',
            responseType: 'json'
        })
            .then(data => {
                setConversations(data.data)
                console.log(data.data)
            }
            )
    }

    useEffect(() => {
        getConversations()

    }, [])

    return (
        <div className='conversationsSection'>
            <div className='search-form'>
                <SearchForm />
            </div>
            <div className='recently-conversations'>
                <div className='tilte'>Recent</div>
                <div className='conversations'>

                    <ConversationTile />
                    <ConversationTile />
                    <ConversationTile />

                </div>

            </div>

        </div>
    );
};

export default ConversationsSection;