import React, { useState } from 'react'
import Leftpanel from './Leftpanel'
import Rightpanel from './Rightpanel'
import Footer from './Footer'

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