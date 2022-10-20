import React from 'react';
import { useState, useEffect } from 'react';
import ConversationTile from './ConversationTile';
import SearchForm from './SearchForm';
import axios from 'axios';

const ContactSection = () => {
    const [contacts, setContacts] = useState()
    const [isloading, setisloading] = useState(true)
    const getConversations = () => {
        axios({
            method: 'get',
            url: 'http://localhost:35000/users',
            responseType: 'json'
        })
            .then(data => {
                setContacts(data.data)
                setisloading(false)
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
                <div className='tilte'>Contact Section</div>
                <div className='conversations'>

                    {
                        isloading ? <ConversationTile /> : contacts.map(contact => {


                            return <ConversationTile name={contact.name} image={contact.profil} />
                        })
                    }






                </div>

            </div>

        </div>
    );
};


export default ContactSection;