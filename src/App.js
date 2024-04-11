
import './App.css';
import React, { useState } from 'react'
import Login from './Component/Login';
import Mainfile from './Component/Mainfile';
import Middle from './Component/Middle';
import Openmail from './Component/Openmail';
import Signin from './Component/Signin';
import { Routes,Route,useLocation } from 'react-router-dom';




function App() {

  const [subCollect, setSubCollect] = useState('')
  const [search, setSearch] = useState('')
  

  const [isOpen, setIsOpen] = useState(true)
  const toggleSideBar = () => setIsOpen(!isOpen)

   
   const location = useLocation();
  
   
   const isLoginPage = location.pathname === '/'|| location.pathname === '/signin';

  return (
    <div className="App">
    

<Routes>
 <Route exact path='/' element={<Login />}/>
<Route exact path='/signin' element={<Signin />}/>
</Routes>

<div>
    {isLoginPage ? null : (
        <div>
          <Mainfile setSubCollect={setSubCollect} isOpen={isOpen} toggleSideBar={toggleSideBar}>
            <Routes>
              <Route exact path='/main' element={<Middle search={search} subCollect={subCollect} setSearch={setSearch} isOpen={isOpen} />} />
              <Route exact path='/main/:id' element={<Openmail search={search} subCollect={subCollect} setSearch={setSearch} isOpen={isOpen} />} />
            </Routes>
          </Mainfile>
        </div>
      )}
    </div>
    </div>
  );
}

export default App;
