import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videos.actions';
import { keywords } from './Keywords';
import './_category.scss';

const Categories = () => {
  const [activeElement,setActiveElement] = useState('All');
  const dispatch = useDispatch()

  console.log('setActiveElement',activeElement);

  const handleClick = value => {
    setActiveElement(value)
    if (value === 'All') {
       dispatch(getPopularVideos())
    } else {
       dispatch(getVideosByCategory(value))
    }
 }

  return (
    <div className='categories'>
        {
          keywords.map((keywords,i)=>{
            return (
              <div className='category' key={i}>
              <span onClick={()=>handleClick(keywords)}
               className={activeElement === keywords ? 'active' : ''}
              >{keywords}</span>
              </div>
            )
          })
        }
    </div>
  )
}

export default Categories