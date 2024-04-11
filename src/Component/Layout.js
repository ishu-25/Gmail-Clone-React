
import './App.css';
import React, { useState } from 'react'
import Login from './Component/Login';
import Mainfile from './Component/Mainfile';
import Middle from './Component/Middle';
import Openmail from './Component/Openmail';
import Signin from './Component/Signin';
import { Routes,Route } from 'react-router-dom';




function Layout(props) {

  const [subCollect, setSubCollect] = useState('')
  const [search, setSearch] = useState('')


  const [isOpen, setIsOpen] = useState(true)
  const toggleSideBar = () => setIsOpen(!isOpen)

  return (
    <div className="Layout">
    

    {props.children}
<div>
  <Mainfile setSubCollect={setSubCollect} isOpen={isOpen} toggleSideBar={toggleSideBar} >
    <Routes>
      
      <Route exet path='/signin' element={<Signin />}/>
      <Route exet path='/main' element={<Middle search={search} subCollect={subCollect} setSearch={setSearch} isOpen={isOpen}/>}/>
      <Route exet path='/main/:id' element={<Openmail search={search} subCollect={subCollect} setSearch={setSearch} isOpen={isOpen}/>}/>
      
    </Routes>
    </Mainfile>
    </div>
    </div>
  );
}

export default Layout;
