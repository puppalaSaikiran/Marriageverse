import React from 'react'
import './cards.css';
import frame1 from './New folder/Frame 1.png'
import frame2 from './New folder/Frame 2.png'
import frame3 from './New folder/Frame 3.png'
import group from './New folder/Details.png'
import group1 from './New folder/Group 57.png'
import group2 from './New folder/Group 65.png'

function Cards() {
  return (
    <div className='entire justify-content-center d-flex'>
        <div className='colls1 d-flex  '>
            <div className='imgtext'>
                <img src={frame1} alt='viverra'/>
            </div>
            <div className='imgtext'>
                <img src={group} alt='details'/>
            </div>
        </div>
        <div className='colls2 d-flex'>
            <div className='imgtext1'>
                <img src={group1} alt='profile'/>
            </div>
            <div className='imgtext1'>
                <img src={frame2} alt='quiscongue'/>
            </div>
        </div>
        <div className='colls3 d-flex'>
            <div className='imgtext2'>
                <img src={frame3} alt='habitasse'/>
            </div>
            <div className='imgtext2'>
                <img src={group2} alt='together'/>
            </div>
        </div>
    </div>
  )
}

export default Cards