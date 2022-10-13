import React from 'react';
import { FiLogOut} from 'react-icons/fi'
import { AiFillMessage} from 'react-icons/ai'
import { IoIosContacts} from 'react-icons/io'
import Avatar from './Avatar';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='avatar'>
                <Avatar/>
            </div>
            <div className='navigation'>
            <div className='menu-icon-active'>
              <AiFillMessage/>
            </div>
            <div className='menu-icon'>
              <IoIosContacts/>
            </div>
           
            </div>
            <div className='logout'>
                
                <FiLogOut/>
            </div>

            
        </div>
    );
};

export default Sidebar;