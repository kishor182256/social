import React from 'react';
import './_sidebar.scss';

import {MdHome,MdHistory,
  MdSubscriptions,MdThumbUp,
  MdExitToApp,MdLibraryBooks,
  MdSentimentDissatisfied} from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/auth.actions';


const Sidebar = ({sidebar,handleToggleSidebar}) => {
  const dispatch = useDispatch()
  const handleLogout = () => {
     dispatch(logout())
     window.location.reload()
  }
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

         <li onClick={handleLogout}>
        <MdExitToApp size={22} />
        <span>Logout</span>
        </li>

    </nav>
  )
}

export default Sidebar