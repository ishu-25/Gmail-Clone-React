import React, { useState } from 'react'
import Leftpanel from './Leftpanel'
import Middle from './Middle'
import Rightpanel from './Rightpanel'
import Footer from './Footer'
import Openmail from './Openmail'

function Mainfile(props) {

 

  return (
    <div>

      <Leftpanel setSubCollect={props.setSubCollect} isOpen={props.isOpen} toggleSideBar={props.toggleSideBar} />
      {props.children}


      <Rightpanel />
      <Footer />
    </div>
  )
}

export default Mainfile