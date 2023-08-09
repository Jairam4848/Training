import React from 'react';
import '../HeaderOptions/HeaderOptions.css';
import { Avatar } from '@mui/material';

const HeaderOption = ({ icon, title, avatar }) => {
  return (
    <div className='headerOption'>
      {icon && <i className={icon}></i>}
      {avatar && <Avatar className='headerOption_icon' src={avatar} alt='avatar' />}
      <h3 className='headerOption_title'>{title}</h3>
    </div>
  );
};

export default HeaderOption;
