import React, { useState } from 'react';
import './Header.css';
import logo from './New folder/logos2.png';
import Googleplay from './New folder/GooglePlay.png';
import AppleStore from './New folder/AppleStore.png';
import menu from './New folder/menu.png';
import '../App.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='header-container'>
      <div className='Navbar'>
        <img src={logo} alt='logo' className='logos' />
        <img src={menu} alt='menu' className='menu-icon' onClick={toggleMenu} />
        <ul className={`nav-items ${isOpen ? 'show' : ''}`}>
          <li className='item'>About</li>
          <li className='item'>Blog</li>
          <li className='item'>Careers</li>
        </ul>
        <div className='div-tools'>
          <img src={Googleplay} alt='Google Play' className='img-navbar' />
          <img src={AppleStore} alt='Apple Store' className='img-navbar' />
        </div>
      </div>
    </header>
  );
};

export default Header;
