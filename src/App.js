
import './App.css';
import React, { useState,createContext } from 'react'
import Login from './Component/Login';
import Mainfile from './Component/Mainfile';
import Middle from './Component/Middle';
import Openmail from './Component/Openmail';
import Signin from './Component/Signin';
import { Routes,Route,useLocation } from 'react-router-dom';
import { Inbox } from '@mui/icons-material';

export const sideContext = createContext()

function App() {

  const [subCollect, setSubCollect] = useState('')
  const [search, setSearch] = useState('')
  

  const [isOpen, setIsOpen] = useState(true)
  const toggleSideBar = () => setIsOpen(!isOpen)
  const [getMailCalled, setGetMailCalled] = useState(false);

   
   const location = useLocation();
  
   
   const isLoginPage = location.pathname === '/'|| location.pathname === '/signin';

  return (
    <sideContext.Provider value={{getMailCalled:getMailCalled,setGetMailCalled:setGetMailCalled}}>
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
              {/* <Route exact path='/main/inbox' element={<Inbox search={search} subCollect={subCollect} setSearch={setSearch} isOpen={isOpen} />} /> */}
              <Route exact path='/main/:id' element={<Openmail search={search} subCollect={subCollect} setSearch={setSearch} isOpen={isOpen} />} />
            </Routes>
          </Mainfile>
        </div>
      )}
    </div>
    
    </div>
    </sideContext.Provider>
  );
}

export default App;
