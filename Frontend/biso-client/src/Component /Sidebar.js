import React, { useContext } from 'react';
import { FiLogOut } from 'react-icons/fi'
import { AiFillMessage } from 'react-icons/ai'
import { IoIosContacts, IoIosTrendingUp } from 'react-icons/io'
import { generalContext } from '../GeneralContext';

import Avatar from './Avatar';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

    const { sectionContactSelected, setSectionContactSelected } = useContext(generalContext)
    const { logIn, setLogIn } = useContext(generalContext)
    const disconnect = () => {
        window.localStorage.removeItem('token')
        setLogIn(false)
    }
    return (
        <div className='sidebar'>
            <div className='avatar'>
                <Avatar />
            </div>
            <div className='navigation'>

                <div className='menu-icon' onClick={() => setSectionContactSelected(false)}>
                    <AiFillMessage />
                </div>

                <div className='menu-icon' onClick={() => setSectionContactSelected(true)}>
                    <IoIosContacts />
                </div>

            </div>
            <div className='logout' onClick={disconnect}>

                <FiLogOut />
            </div>


        </div>
    );
};

export default Sidebar;