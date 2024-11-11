import React from 'react'
import './Programs.css'
import p1 from'../../assets/program-1.png'
import p2 from'../../assets/program-2.png'
import p3 from'../../assets/program-3.png'
import i1 from'../../assets/program-icon-1.png'
import i2 from '../../assets/program-icon-2.png'
import i3 from '../../assets/program-icon-3.png'


const Programs = () => {
  return (
    <div className='programs'>
      <div className='program'> 
        <img src={p1} alt="" />
        <div className='caption'>
            <img src={i1} alt="" />
            <p>something here</p>
        </div>
      </div>
      <div className='program'> 
        <img src={p1} alt="" />
        <div className='caption'>
        
            <img src={i2} alt="" />
            <p>something here</p>
        </div>
      </div>
      <div className='program'> 
        <img src={p1} alt="" />
        <div className='caption'>
        
            <img src={i3} alt="" />
            <p>something here</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
