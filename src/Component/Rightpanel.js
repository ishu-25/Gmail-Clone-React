import React from 'react'
import Tasks from './Tasks'
import Contacts from './Contacts'
import Event from './Event'
import Keep from './Keep/keep'



function Rightpanel() {
  return (
    <div style={{ backgroundColor: '#F9F9F9', minHeight: '100vh', textAlign:'center', position:'fixed', right:'0', width:'5vw'}}>
        <Event />
        <Keep />
        <Contacts />
        <Tasks />
    </div>
  )
}

export default Rightpanel