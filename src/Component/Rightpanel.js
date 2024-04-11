import React from 'react'
import Tasks from './Tasks'
import Contacts from './Contacts'
import Event from './Event'
import Keep from './Keep/keep'
import Profile from './Profile';


function Rightpanel() {
  return (
    <div 
      style={{ top: '0', backgroundColor: '#F9F9F9', minHeight: '100vh', textAlign: 'center', position: 'fixed', right: '0', width: '5vw' }}>
      <Profile />
      <Event />
      <Keep />
      <Tasks />
      <Contacts />
    </div>
  )
}

export default Rightpanel