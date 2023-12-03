import logo from './logo.svg';
import './App.css';
import {BrowserRouter ,Routes,Route} from "react-router-dom"
import Component1 from './Component1';
import Component2 from './Component2';
import  {useReducer,createContext} from 'react'


function App() {
  return (
   <div>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Component1/>}/>
      <Route path="/next" element={<Component2/>}/>
      </Routes>
    </BrowserRouter>

   </div>
  );
}

export default App;
