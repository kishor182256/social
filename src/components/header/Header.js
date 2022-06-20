import React from 'react';
import './_header.scss';
import {FaBars} from 'react-icons/fa';
import {AiOutlineSearch} from 'react-icons/ai';
import {MdNotifications,MdApps} from 'react-icons/md'
const imgpath = 'data:image/png;base64,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'
const Header = ({handleToggleSidebar}) => {
  return (
    <div className='header'>
      <FaBars className='header__menu' size={26} onClick={()=>handleToggleSidebar()}/>
      <img className='header_logo' 
       src='http://pngimg.com/uploads/youtube/youtube_PNG2.png' 
       alt='headerImage'/>

       <form action=''>
         <input type='text' placeholder='Search...'/>
         <button type='submit'><AiOutlineSearch size={22}/></button>
       </form>

       <div className='header__icons'>
           <MdNotifications size={28}/>
           <MdApps size={28}/>
            <img src= {imgpath}  alt= 'path' />
       </div>

    </div>
  )
}

export default Header