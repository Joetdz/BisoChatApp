import React, { useContext } from 'react';
import ChatSecetion from '../Component /ChatSecetion';
import ConversationsSection from '../Component /ConversationsSection';
import Sidebar from '../Component /Sidebar';
import ContactSection from '../Component /ContactSection'
import { generalContext } from '../GeneralContext';

const Home = () => {
    const { sectionContactSelected, setSectionContactSelected } = useContext(generalContext)
    console.log(sectionContactSelected)
    return (
        <div className='home'>
            <Sidebar />
            {
                sectionContactSelected == true ? <ConversationsSection /> :
                    <ContactSection />
            }




            <ChatSecetion />
        </div>
    );
};

export default Home; 