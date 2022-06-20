import React, { useEffect, useState } from 'react'
import './_video.scss'
import { AiFillEye } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import moment from 'moment'
import request from '../../api'
import { useHistory } from 'react-router-dom'
import numeral from 'numeral'
const Video = ({video}) => {
   const videos = useSelector(state => state.homeVideosReducer)
   const [duration,setDuration] = useState(null)
   const [views, setViews] = useState(null)
   

   const {
      id,
      snippet: {
         channelId,
         channelTitle,
         title,
         publishedAt,
         thumbnails: { medium },
      },
      contentDetails,
   } = video
   
   
   const seconds = moment.duration(duration).asSeconds()
   const _duration = moment.utc(seconds * 1000).format('mm:ss')
   const _videoId = id?.videoId || contentDetails?.videoId || id
   
   


   useEffect(() => {
      const get_video_details = async () => {
         const data = await request('/videos', {
            params: {
               part: 'contentDetails,statistics',
               id: _videoId,
            },

         })
         setDuration(data.data.items[0].contentDetails.duration);
         setViews(data.data.items[0].statistics.viewCount)
      }
      get_video_details()

   }, [_videoId])



   return (
      <div className='video'>
         <div className='video__top'>
            <img src={medium.url} alt='' />
            {/* <LazyLoadImage src={medium.url} effect='blur' /> */}
            <span className='video__top__duration'>{_duration}</span>
         </div>
         <div className='video__title'>{title}</div>
         <div className='video__details'>
            <span>
               <AiFillEye /> {numeral(views).format('0.a')} Views •{' '}
            </span>{' '}
            <span> {moment(publishedAt).fromNow()} </span>
         </div>
        
            <div className='video__channel'>
               <img src={medium.url} effect='blur' />

               <p>{channelTitle}</p>
            </div>
      
      </div>
   )
      
}

export default Video