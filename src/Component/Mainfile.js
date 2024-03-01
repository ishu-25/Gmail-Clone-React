import React, { useState } from 'react'
import Leftpanel from './Leftpanel'
import Middle from './Middle'
import Rightpanel from './Rightpanel'
import Footer from './Footer'
import Openmail from './Openmail'

function Mainfile() {

  const [subCollect,setSubCollect] = useState('')
  const [search,setSearch] = useState('')

  const [isOpen, setIsOpen] = useState(true)
  const toggleSideBar = () => setIsOpen(!isOpen)


  return (
    <div>
     
          <Leftpanel setSubCollect={setSubCollect} isOpen={isOpen} toggleSideBar={toggleSideBar} />
       
          <Middle search={search} subCollect={subCollect} setSearch={setSearch} isOpen={isOpen} />
          {/* <Openmail search={search} subCollect={subCollect} setSearch={setSearch} isOpen={isOpen} /> */}
       
          <Rightpanel />
       
          <Footer />
    </div>
  )
}

export default Mainfile