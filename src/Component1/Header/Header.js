import React from 'react';
import linkdin from '../../assets/linkdin.png';
import '../Header/Header.css';
import HeaderOption from '../HeaderOptions/HeaderOption';

const Header = () => {
  return (
    <div className='header'>
      <div className='header_left'>
        <img src={linkdin} alt='linkdin' />
        <div className='header_search'>
          <i className="fas fa-search"></i>
          <input type='text' />
        </div>
      </div>
      <div className='header_right'>
        <HeaderOption icon="fa-solid fa-house" title="Home" />
        <HeaderOption icon="fa-solid fa-user-group" title="My Network" />
        <HeaderOption icon="fa-solid fa-business-time" title="Jobs" />
        <HeaderOption icon="fa-solid fa-message" title="Messaging" />
        <HeaderOption icon="fa-solid fa-bell" title="Notifications" />
        <HeaderOption avatar={'https://tse3.explicit.bing.net/th?id=OIP.Lbrc0ggi2zFDThb-vVFpDgHaE8&pid=Api&P=0&h=220'} title='me' />
      </div>
    </div>
  );
};

export default Header;
