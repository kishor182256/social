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
      const get_video_details =  async() => {
        const data= await request('/videos', {
            params: {
               part: 'contentDetails,statistics',
               id: _videoId,
            },
           
         })
           setDuration(data.data.items[0].contentDetails.duration);
         
      }
      get_video_details()
      
   }, [])



   return (
      <>
         {
            videos.videos?.map((videos) => {
               return (

                  <> <div className='video'>
                     <div className='video__top'>
                        <img className='video__top' src={videos?.snippet.thumbnails.medium.url}
                           alt={videos.snippet.thumbnails.medium.url} />
                        <span className='video__top__duration'>{_duration}</span>
                        <div className='video__title'>{videos.snippet.title}</div>
                        <div className='video__details'>
                           <span>
                              <AiFillEye /> {numeral(videos.statistics.viewCount).format('0.a')} •{' '}
                           </span>{' '}
                           <span> {moment(videos.snippet.publishedAt).fromNow()} </span>
                        </div>
                        <div className='video__channel'>
                           <img src={videos?.snippet.thumbnails.medium.url} alt="" />
                           <p>{videos.snippet.channelTitle}</p>
                        </div>
                     </div>

                  </div>
                  </>

               )
            })
         }

      </>

   )
}

export default Video