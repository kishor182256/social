// import React from 'react';
// import './_video.scss';
// import {AiFillEye} from 'react-icons/ai'

// const Video = () => {
//   return (
//     <div className='video'>
//        <div className='video-top'>
//          <img src='https://cdn.pixabay.com/photo/2017/10/10/21/49/youtuber-2838945__340.jpg' alt=''/>
//          <span className=''>5:30</span>
//        </div>
//        <div className='video-title'>Create React App In 10 Minutes</div>
//        <div className='video-details'>
//          <span>
//            <AiFillEye/> 5M Views
//          </span>{' '}
//          <span>5 days Ago</span>
//        </div>
//        <div className='video-channel'>
//          <img src='' alt=""/>
//          <p>Rain Hat</p>
//        </div>

//     </div>
//   )
// }

// export default Video





import React from 'react'
import './_video.scss'

import { AiFillEye } from 'react-icons/ai'
const Video = ({ video, channelScreen }) => {
   return (
      <div className='video'>
         <div className='video__top'>
                 <img src='https://cdn.pixabay.com/photo/2017/10/10/21/49/youtuber-2838945__340.jpg' alt=''/>
            <span className='video__top__duration'>5:30</span>
         </div>
         <div className='video__title'>Create React App In 10 Minutes</div>
         <div className='video__details'>
            <span>
               <AiFillEye /> 5 M Views •{' '}
            </span>{' '}
            <span> 3 Days Ago </span>
         </div>
         <div className='video__channel'>
         <img src='https://media.istockphoto.com/photos/african-man-recording-video-on-camera-at-home-picture-id1317677134?b=1&k=20&m=1317677134&s=170667a&w=0&h=TkpQlVluLRMGlh8FzXqQphcPgpJuBtVpgLSKf3WyS0I=' alt=""/>
         <p>Rain Hat</p>
       </div>
      </div>
   )
}

export default Video