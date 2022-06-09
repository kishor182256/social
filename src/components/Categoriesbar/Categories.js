import React, { useState } from 'react';
import { keywords } from './Keywords';
import './_category.scss';

const Categories = () => {
  const [activeElement,setActiveElement] = useState('All');

  console.log('setActiveElement',activeElement);

  const handleClick = (value) =>{
    setActiveElement(value)
  }

  return (
    <div className='categories'>
        {
          keywords.map((keywords,i)=>{
            return (
              <div className='category' key={i}>
              <span onClick={()=>handleClick(keywords)} className={activeElement === keywords ? 'active' : ''}
              >{keywords}</span>
              </div>
            )
          })
        }
    </div>
  )
}

export default Categories