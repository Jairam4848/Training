import React from 'react'
import '../sidebar/Sidebar.css'
import { Avatar } from '@mui/material'

export const Sidebar = () => {

  const recentItem = (topic) => (
    <div className='sidebar_recentItem'>
      <span className='sidebar_hash'>#</span>
      <p>{topic}</p>
    </div>
  )

  return (
    <div className='sidebar'>
      <div className='sidebar_top'>
        <img src='https://tse3.mm.bing.net/th?id=OIP.qckMTJNnclryi-dhN_WYwQHaEK&pid=Api&P=0&h=220' alt='' />
        <Avatar className='sidebar_avatar' />
        <h2>JaiRam</h2>
        <h4>jairammeeniga@gmail.com</h4>
      </div>

      <div className='sidebar_stats'>
        <div className='sidebar_stat'>
          <p>Who Viewed you</p>
          <p className='sidebar_statNumber'>2,344</p>
        </div>
        <div className='sidebar_stat'>
          <p>Views on post</p>
          <p className='sidebar_statNumber'>3,333</p>
        </div>

        <div className='sidebar_bottom'>
          <p>Recent</p>
          {recentItem('reactjs')}
          {recentItem('programming')}
          {recentItem('softwareengineer')}
          {recentItem('flutter')}
          {recentItem('java')}
        </div>
      </div>
    </div>
  )
}
