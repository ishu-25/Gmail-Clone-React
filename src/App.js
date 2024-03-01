
import './App.css';
import Login from './Component/Login';
import Mainfile from './Component/Mainfile';
import Openmail from './Component/Openmail';
import Signin from './Component/Signin';
import { Routes,Route } from 'react-router-dom';




function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/signin' element={<Signin />}/>
      <Route path='/main/' element={<Mainfile />}>
       <Route path='openmail' element={<Openmail/>}/> 
      </Route>
      
    </Routes>
    </div>
  );
}

export default App;
