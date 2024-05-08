import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './components /home';
import Calendar from './components /calendar';

function App() {
  return (
   <div className='App'>
     <Routes>
      <Route path='/' element={<Home/>}></Route>

     </Routes>
   </div>
  );
}

export default App;
