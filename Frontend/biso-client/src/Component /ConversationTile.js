import React from 'react';
import Avatar from './Avatar';
import { useContext } from 'react';
import { generalContext } from '../GeneralContext';

const ConversationTile = ({ image, idConversation, idCorespondant }) => {
    const { contacts, setContacts } = useContext(generalContext)

    const contact = contacts && contacts.find(contact => {
        return contact._id === idCorespondant
    })
    console.log('contc', contact)
    console.log('Conversation', idCorespondant)
    return (
        <div className='conversationTile'  >
            <div className='user-profil'>

                <Avatar url={contact && contact.profil} />
            </div>
            <div className='user-detail'>
                <span className='user-name'>{contact && contact.name}</span>
                <p className='message-label'>bonjour</p>
            </div>

        </div>
    );
};

export default ConversationTile;