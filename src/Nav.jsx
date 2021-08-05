import React from 'react';
import './App.css';

const Nav = () => {
    return (
      <nav className='nav'>
        <div className='profile'>
          <a href='#'>Profile</a>
        </div>
        <div className='messages'>
          <a href='#'>Messages</a>
        </div>
        <div className='news'>
          <a href='#'>News</a>
        </div>
        <div className='music'>
          <a href='#'>Music</a>
        </div>
        <div className='settings'> 
          <a href='#'>Settings</a>
        </div>

      </nav>
    )
}

export default Nav;