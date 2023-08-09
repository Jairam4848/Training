import React from 'react'
import Header from './Component1/Header/Header'
import { Sidebar } from './Component1/sidebar/Sidebar'
import './App.css'
import Feed from './Component1/Feed/Feed'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <div className='app_body'>
        <Sidebar />
        <Feed />
      </div>
    </div>
  )
}

export default App