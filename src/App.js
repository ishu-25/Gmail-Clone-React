
import './App.css';
import Login from './Component/Login';
import Mainfile from './Component/Mainfile';
import Signin from './Component/Signin';
import { Routes,Route } from 'react-router-dom';




function App() {
  return (
    <div className="App">
    {/* <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/' element={<Signin />}/>
    </Routes> */}
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/signin' element={<Signin />}/>
      <Route path='/main' element={<Mainfile />}/>
    </Routes>
    </div>
  );
}

export default App;
