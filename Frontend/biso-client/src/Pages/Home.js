import React from 'react';
import ChatSecetion from '../Component /ChatSecetion';
import ConversationsSection from '../Component /ConversationsSection';
import Sidebar from '../Component /Sidebar';

const Home = () => {
    return (
        <div className='home'>
            <Sidebar/>
            <ConversationsSection/>
            <ChatSecetion/>
        </div>
    );
};

export default Home;