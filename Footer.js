import React from 'react';
import './Footer.css';
import logo from './New folder/logo.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-container">
          <img src={logo} alt='logo' className='logos' />
        </div>
        <ul className='list'>
          <li className='parts'>About</li>
          <li className='parts'>Blog</li>
          <li className='parts'>Careers</li>
        </ul>
        <p className="copyright">Copyright © Marriage verse, All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;