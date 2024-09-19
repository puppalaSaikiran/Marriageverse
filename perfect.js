import React from 'react';
import './perfect.css';
import googlePlay from './New folder/GooglePlay.png';
import couple from './New folder/couples.png';
import AppleStore from './New folder/AppleStore.png';

const Perfect = () => {
  return (
    <div className='container'>
      <div className='logo-couple'>
        <div className='couples-img'>
          <img src={couple} alt='Couple' className='img'/>
        </div>
        <div className='contents-logo'>
          <h1>Find your <span className='matches'>perfect match</span> </h1>
          <p>Actor enim consectetur scelerisque vitae non at.
            velit duriterus integer slit condimentum.</p>
        </div>
      </div> 
      <div className='playstores'>
        <img src={googlePlay} alt='Google Play Store' className='store-img' />
        <img src={AppleStore} alt='Apple Store' className='store-img' />
      </div>        
    </div>
  );
}

export default Perfect;
