import React from 'react'
import './CardSection.css';
import Group from './New folder/Group 52.png';
import users from './New folder/users.png';
import Grained from './New folder/Grained.png';

const Profile = () => {
  return (
    <>
    <div className='profile'>
      <div className='profile-img'>
          <img src={Group} alt='' />
           <h2>Validated Profiles</h2>
           <p>Pretium cras diam ullamcorper lorem nec faucibus diam etiam. Donec sed ac,</p>
        </div>  
      <div className='profile-img'>
          <img src={users} alt='' />
           <h2>AI-Powered Matchmaking</h2>
           <p>Egestas amet leo, dolor lectus scelerisque id libero eleifend.At lectus tortor, sit amet amet,</p>
        </div>  
      <div className='profile-img'>
          <img src={Grained } alt='' />
           <h2>Fine-grained filtering </h2>
           <p>Aliquam diam nibh nunc dui neque.Nascetur in send vel</p>
        </div>  
    </div>
    <div className='btn-profile'>
        <button>Try for free</button>
    </div>
    </>
  )
}

export default Profile
