import React from 'react';
import './_sidebar.scss';

import {MdHome,MdHistory,
  MdSubscriptions,MdThumbUp,
  MdExitToApp,MdLibraryBooks,
  MdSentimentDissatisfied} from 'react-icons/md'


const Sidebar = ({sidebar,handleToggleSidebar}) => {
  console.log(sidebar);
  return (
    <nav className={sidebar?'sidebar open':'sidebar'}>
        <li>
        <MdHome size={22} onClick={()=>handleToggleSidebar()}/>
        <span>Home</span>
        </li>

        <li>
        <MdSubscriptions size={22} onClick={()=>handleToggleSidebar()}/>
        <span>Subscriptions</span>
        </li>

        <li>
        <MdThumbUp size={22} onClick={()=>handleToggleSidebar()}/>
        <span>Likes</span>
        </li>

        <li>
        <MdHistory size={22} onClick={()=>handleToggleSidebar()}/>
        <span>History</span>
        </li>

        <li>
        <MdLibraryBooks size={22} onClick={()=>handleToggleSidebar()}/>
        <span>Library</span>
        </li>

        <li>
        <MdSentimentDissatisfied size={22} onClick={()=>handleToggleSidebar()}/>
        <span>Sentiments</span>
        </li>

         <li>
        <MdExitToApp size={22} onClick={()=>handleToggleSidebar()}/>
        <span>Logout</span>
        </li>

    </nav>
  )
}

export default Sidebar